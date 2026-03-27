const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_URL = "https://api.spotify.com/v1";
const TOKEN_SAFETY_WINDOW_MS = 60_000;

// 🌍 GLOBAL CACHE (Vercel reuse)
const globalCache = globalThis as any;

if (!globalCache.spotify) {
  globalCache.spotify = {
    token: null,
    tokenExpiresAt: 0,
    playlists: new Map(),
    albums: new Map(),
    tracks: new Map(),
    inFlight: new Map(),
  };
}

const cache = globalCache.spotify;

// TYPES
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

// 🔑 CREDENTIALS
function getSpotifyCredentials() {
  return {
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  };
}

// 🔐 TOKEN CACHE
async function getAccessToken(): Promise<string> {
  const now = Date.now();

  if (cache.token && now < cache.tokenExpiresAt) {
    return cache.token;
  }

  const { clientId, clientSecret } = getSpotifyCredentials();

  if (!clientId || !clientSecret) {
    throw new Error("Missing Spotify credentials");
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
    throw new Error("Spotify token failed");
  }

  const data = (await response.json()) as TokenResponse;

  cache.token = data.access_token;
  cache.tokenExpiresAt =
    Date.now() + data.expires_in * 1000 - TOKEN_SAFETY_WINDOW_MS;

  return cache.token;
}

// 🚀 FETCH INTELIGENTE (DEDUP + RATE LIMIT SAFE)
async function spotifyFetch<T>(path: string): Promise<T | null> {
  if (cache.inFlight.has(path)) {
    return cache.inFlight.get(path);
  }

  const promise = (async () => {
    try {
      const token = await getAccessToken();

      const res = await fetch(`${API_URL}${path}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // 🚨 RATE LIMIT → NO RETRY
      if (res.status === 429) {
        console.warn("Spotify rate limit — skipping");
        return null;
      }

      // 🔄 TOKEN EXPIRADO
      if (res.status === 401) {
        cache.token = null;
        return spotifyFetch<T>(path);
      }

      if (!res.ok) {
        console.warn("Spotify error:", res.status);
        return null;
      }

      return (await res.json()) as T;

    } catch (err) {
      console.error("Spotify fetch error:", err);
      return null;
    } finally {
      cache.inFlight.delete(path);
    }
  })();

  cache.inFlight.set(path, promise);

  return promise;
}

// 🎧 PLAYLIST CACHE (30 min)
export async function getSpotifyPlaylist(
  playlistId: string
): Promise<SpotifyPlaylist | null> {

  const cached = cache.playlists.get(playlistId);

  if (cached && Date.now() < cached.expires) {
    return cached.data;
  }

  const data = await spotifyFetch<any>(`/playlists/${playlistId}`);

  if (!data) return null;

  const normalized: SpotifyPlaylist = {
    name: data.name ?? "",
    description: data.description ?? "",
    images: data.images ?? [],
    external_urls: data.external_urls ?? {},
    tracks: { total: data.tracks?.total ?? 0 },
    followers: { total: data.followers?.total ?? 0 },
  };

  cache.playlists.set(playlistId, {
    data: normalized,
    expires: Date.now() + 1000 * 60 * 30,
  });

  return normalized;
}

// 💿 ALBUM CACHE (1 hora + tracks incluidos)
export async function getSpotifyAlbum(
  albumId: string
): Promise<SpotifyAlbum | null> {

  const cached = cache.albums.get(albumId);

  if (cached && Date.now() < cached.expires) {
    return cached.data;
  }

  const data = await spotifyFetch<any>(`/albums/${albumId}`);

  if (!data) return null;

  const normalized: SpotifyAlbum = {
    id: data.id ?? albumId,
    title: data.name ?? "",
    artist:
      data.artists?.map((a: any) => a.name).join(", ") ?? "",
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

  cache.albums.set(albumId, {
    data: normalized,
    expires: Date.now() + 1000 * 60 * 60, // 1 hora
  });

  return normalized;
}

// 🎵 TRACK CACHE (1 hora)
export async function getSpotifyTrack(
  trackId: string
): Promise<SpotifyTrack | null> {

  const cached = cache.tracks.get(trackId);

  if (cached && Date.now() < cached.expires) {
    return cached.data;
  }

  const data = await spotifyFetch<any>(`/tracks/${trackId}`);

  if (!data) return null;

  const normalized: SpotifyTrack = {
    title: data.name ?? "",
    artists:
      data.artists?.map((a: any) => a.name).join(", ") ?? "",
    releaseDate: data.album?.release_date ?? "",
    releaseDatePrecision: data.album?.release_date_precision ?? "day",
    image: data.album?.images?.[0]?.url ?? null,
    url: data.external_urls?.spotify ?? "#",
    type: data.album?.album_type === "single" ? "single" : "album",
    preview: data.preview_url ?? null,
  };

  cache.tracks.set(trackId, {
    data: normalized,
    expires: Date.now() + 1000 * 60 * 60,
  });

  return normalized;
}