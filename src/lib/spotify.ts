const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_URL = "https://api.spotify.com/v1";
const TOKEN_SAFETY_WINDOW_MS = 60_000;

const playlistCache = new Map<string, SpotifyPlaylist>();
const albumCache = new Map<string, SpotifyAlbum>();

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

type SpotifyPlaylist = {
  name: string;
  description: string;
  images: { url: string }[];
  external_urls: { spotify?: string };
  tracks: { total: number };
  followers: { total: number };
};

type SpotifyAlbum = {
  id: string;
  title: string;
  artist: string;
  releaseDate: string;
  releasePrecision: string;
  type: "single" | "album";
  image: string | null;
  url: string;
  tracks: {
    id: string;
    title: string;
    preview: string | null;
  }[];
};

type SpotifyTrack = {
  title: string;
  artists: string;
  releaseDate: string;
  releaseDatePrecision: string;
  image: string | null;
  url: string;
  type: "single" | "album";
  preview: string | null;
};

type TokenResponse = {
  access_token: string;
  expires_in: number;
};

function getSpotifyCredentials() {
  const clientId =
    process.env.SPOTIFY_CLIENT_ID ?? import.meta.env.SPOTIFY_CLIENT_ID;
  const clientSecret =
    process.env.SPOTIFY_CLIENT_SECRET ?? import.meta.env.SPOTIFY_CLIENT_SECRET;

  return { clientId, clientSecret };
}

async function parseSpotifyError(response: Response) {
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

async function getAccessToken(forceRefresh = false): Promise<string> {
  const now = Date.now();

  if (!forceRefresh && cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const { clientId, clientSecret } = getSpotifyCredentials();

  if (!clientId || !clientSecret) {
    throw new Error(
      "Spotify credentials are missing. Set SPOTIFY_CLIENT_ID and SPOTIFY_CLIENT_SECRET in Vercel.",
    );
  }

  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

  const response = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!response.ok) {
    const message = await parseSpotifyError(response);
    throw new Error(`Spotify token request failed: ${message}`);
  }

  const data = (await response.json()) as TokenResponse;

  cachedToken = data.access_token;
  tokenExpiresAt =
    Date.now() + data.expires_in * 1000 - TOKEN_SAFETY_WINDOW_MS;

  return cachedToken;
}

async function spotifyFetch<T>(path: string, retry = true): Promise<T> {
  const token = await getAccessToken();

  const response = await fetch(`${API_URL}${path}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.status === 401 && retry) {
    clearTokenCache();
    await getAccessToken(true);
    return spotifyFetch<T>(path, false);
  }

  if (!response.ok) {
    const message = await parseSpotifyError(response);
    throw new Error(`Spotify API request failed for ${path}: ${message}`);
  }

  return (await response.json()) as T;
}

export async function getSpotifyPlaylist(
  playlistId: string,
): Promise<SpotifyPlaylist> {
  if (playlistCache.has(playlistId)) {
    return playlistCache.get(playlistId)!;
  }

  const data = await spotifyFetch<any>(`/playlists/${playlistId}`);

  const normalized: SpotifyPlaylist = {
    name: data.name ?? "",
    description: data.description ?? "",
    images: data.images ?? [],
    external_urls: data.external_urls ?? {},
    tracks: {
      total: data.tracks?.total ?? 0,
    },
    followers: {
      total: data.followers?.total ?? 0,
    },
  };

  playlistCache.set(playlistId, normalized);

  return normalized;
}

export async function getSpotifyTrack(trackId: string): Promise<SpotifyTrack> {
  const data = await spotifyFetch<any>(`/tracks/${trackId}`);

  return {
    title: data.name ?? "",
    artists: data.artists?.map((artist: { name: string }) => artist.name).join(", ") ?? "",
    releaseDate: data.album?.release_date ?? "",
    releaseDatePrecision: data.album?.release_date_precision ?? "day",
    image: data.album?.images?.[0]?.url ?? null,
    url: data.external_urls?.spotify ?? "#",
    type: data.album?.album_type === "single" ? "single" : "album",
    preview: data.preview_url ?? null,
  };
}

export async function getSpotifyAlbum(albumId: string): Promise<SpotifyAlbum> {
  if (albumCache.has(albumId)) {
    return albumCache.get(albumId)!;
  }

  const data = await spotifyFetch<any>(`/albums/${albumId}`);

  const normalized: SpotifyAlbum = {
    id: data.id ?? albumId,
    title: data.name ?? "",
    artist:
      data.artists?.map((artist: { name: string }) => artist.name).join(", ") ?? "",
    releaseDate: data.release_date ?? "",
    releasePrecision: data.release_date_precision ?? "day",
    type: data.album_type === "album" ? "album" : "single",
    image: data.images?.[0]?.url ?? null,
    url: data.external_urls?.spotify ?? "#",
    tracks:
      data.tracks?.items?.map((track: any) => ({
        id: track.id,
        title: track.name,
        preview: track.preview_url ?? null,
      })) ?? [],
  };

  albumCache.set(albumId, normalized);

  return normalized;
}
