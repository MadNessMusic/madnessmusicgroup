const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_URL = "https://api.spotify.com/v1";
const TOKEN_SAFETY_WINDOW_MS = 6e4;
const playlistCache = /* @__PURE__ */ new Map();
const albumCache = /* @__PURE__ */ new Map();
let cachedToken = null;
let tokenExpiresAt = 0;
function getSpotifyCredentials() {
  const clientId = process.env.SPOTIFY_CLIENT_ID ?? "db618ce6a8b443f7b0c6a3543845b250";
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET ?? "ae29d8b75fc74d36b7b0a64670b66f8b";
  return { clientId, clientSecret };
}
async function parseSpotifyError(response) {
  try {
    const data = await response.json();
    if (typeof data?.error_description === "string") {
      return data.error_description;
    }
    if (typeof data?.error?.message === "string") {
      return data.error.message;
    }
    if (typeof data?.error === "string") {
      return data.error;
    }
  } catch {
    return `${response.status} ${response.statusText}`;
  }
  return `${response.status} ${response.statusText}`;
}
function clearTokenCache() {
  cachedToken = null;
  tokenExpiresAt = 0;
}
async function getAccessToken(forceRefresh = false) {
  const now = Date.now();
  if (!forceRefresh && cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }
  const { clientId, clientSecret } = getSpotifyCredentials();
  if (!clientId || !clientSecret) {
    throw new Error(
      "Spotify credentials are missing. Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in Vercel."
    );
  }
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: "grant_type=client_credentials"
  });
  if (!response.ok) {
    const message = await parseSpotifyError(response);
    throw new Error(`Spotify token request failed: ${message}`);
  }
  const data = await response.json();
  cachedToken = data.access_token;
  tokenExpiresAt = Date.now() + data.expires_in * 1e3 - TOKEN_SAFETY_WINDOW_MS;
  return cachedToken;
}
async function spotifyFetch(path, retry = true) {
  const token = await getAccessToken();
  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  if (response.status === 401 && retry) {
    clearTokenCache();
    await getAccessToken(true);
    return spotifyFetch(path, false);
  }
  if (!response.ok) {
    const message = await parseSpotifyError(response);
    throw new Error(`Spotify API request failed for ${path}: ${message}`);
  }
  return await response.json();
}
async function getSpotifyPlaylist(playlistId) {
  if (playlistCache.has(playlistId)) {
    return playlistCache.get(playlistId);
  }
  const data = await spotifyFetch(`/playlists/${playlistId}`);
  const normalized = {
    name: data.name ?? "",
    description: data.description ?? "",
    images: data.images ?? [],
    external_urls: data.external_urls ?? {},
    tracks: {
      total: data.tracks?.total ?? 0
    },
    followers: {
      total: data.followers?.total ?? 0
    }
  };
  playlistCache.set(playlistId, normalized);
  return normalized;
}
async function getSpotifyAlbum(albumId) {
  if (albumCache.has(albumId)) {
    return albumCache.get(albumId);
  }
  const data = await spotifyFetch(`/albums/${albumId}`);
  const normalized = {
    id: data.id ?? albumId,
    title: data.name ?? "",
    artist: data.artists?.map((artist) => artist.name).join(", ") ?? "",
    releaseDate: data.release_date ?? "",
    releasePrecision: data.release_date_precision ?? "day",
    type: data.album_type === "album" ? "album" : "single",
    image: data.images?.[0]?.url ?? null,
    url: data.external_urls?.spotify ?? "#",
    tracks: data.tracks?.items?.map((track) => ({
      id: track.id,
      title: track.name,
      preview: track.preview_url ?? null
    })) ?? []
  };
  albumCache.set(albumId, normalized);
  return normalized;
}

export { getSpotifyPlaylist as a, getSpotifyAlbum as g };
