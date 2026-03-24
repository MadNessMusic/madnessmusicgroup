// src/lib/spotify.ts

const TOKEN_URL = "https://accounts.spotify.com/api/token";
const API_URL = "https://api.spotify.com/v1";

// cache en memoria (perfecto para Vercel)
const playlistCache = new Map<string, any>();
const albumCache = new Map<string, any>();

let cachedToken: string | null = null;
let tokenExpiresAt = 0;

async function getAccessToken(): Promise<string> {
  const now = Date.now();

  if (cachedToken && now < tokenExpiresAt) {
    return cachedToken;
  }

  const auth = Buffer.from(
    `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
  ).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  if (!res.ok) {
    throw new Error("Spotify: error obteniendo access token");
  }

  const data = await res.json();

  cachedToken = data.access_token;
  tokenExpiresAt = now + data.expires_in * 1000 - 60_000;

  return cachedToken!;
}

// 🔥 PLAYLIST
export async function getSpotifyPlaylist(playlistId: string) {

  if (playlistCache.has(playlistId)) {
    return playlistCache.get(playlistId);
  }

  const token = await getAccessToken();

  const res = await fetch(`${API_URL}/playlists/${playlistId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Spotify playlist ${playlistId} failed`);
  }

  const data = await res.json();

  const normalized = {
    name: data.name,
    description: data.description,
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

// 🔥 TRACK
export async function getSpotifyTrack(trackId: string) {

  const token = await getAccessToken();

  const res = await fetch(`${API_URL}/tracks/${trackId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Spotify: error obteniendo track");
  }

  const data = await res.json();

  return {
    title: data.name,
    artists: data.artists.map((a: any) => a.name).join(", "),
    releaseDate: data.album.release_date,
    releaseDatePrecision: data.album.release_date_precision,
    image: data.album.images?.[0]?.url ?? null,
    url: data.external_urls.spotify,
    type: data.album.album_type === "single" ? "single" : "album",
    preview: data.preview_url,
  };
}

// 🔥 ALBUM
export async function getSpotifyAlbum(albumId: string) {

  if (albumCache.has(albumId)) {
    return albumCache.get(albumId);
  }

  const token = await getAccessToken();

  const res = await fetch(`${API_URL}/albums/${albumId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Spotify album ${albumId} error`);
  }

  const data = await res.json();

  const normalized = {
    id: data.id,
    title: data.name,
    artist: data.artists?.map((a: any) => a.name).join(", "),
    releaseDate: data.release_date,
    releasePrecision: data.release_date_precision,
    type: data.album_type === "album" ? "album" : "single",
    image: data.images?.[0]?.url ?? null,
    url: data.external_urls?.spotify ?? "#",
    tracks:
      data.tracks?.items?.map((t: any) => ({
        id: t.id,
        title: t.name,
        preview: t.preview_url,
      })) ?? [],
  };

  albumCache.set(albumId, normalized);

  return normalized;
}