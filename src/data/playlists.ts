export type PlaylistStatus = "featured" | "evergreen" | "archive";

export interface Playlist {
  [x: string]: any;
  id: string;
  title: string;
  description: string;
  cover: string;
  image?: string;
  spotifyId?: string;
  spotifyUrl?: string;
  status: PlaylistStatus;
  genre?: string[];
  seo?: {
    title?: string;
    description?: string;
  };
  updatedAt?: string;
  trackCount?: number;
  followers?: number;
}

export const playlists: Playlist[] = [
  {
    id: "madness-discover",
    spotifyId: "2bbJiLQ8OfjNetvTYRk2T6",
    status: "featured",
    genre: ["Pop", "Latin", "Reggaeton"],
    title: "MadNess Discover",
    description:
      "Descubre nuevos talentos del urbano latino. Reggaeton, trap latino y sonidos comerciales emergentes. Curaduria editorial por MadNess Music Group. Updated weekly.",
    seo: {
      title: "MadNess Discover - Nuevos sonidos latinos | MadNess Music Group",
      description:
        "Descubre nuevos talentos del urbano latino. Reggaeton, trap latino y sonidos comerciales emergentes. Curaduria editorial por MadNess Music Group.",
    },
    cover: "/images/playlists/madness-discover.png",
    updatedAt: "2026-02-26",
  },
  {
    id: "madness-day-vibes",
    spotifyId: "0ZPWB2WnEdSPhpn2Or5uVc",
    status: "evergreen",
    title: "MadNess Day Vibes",
    description:
      "Radar semanal de nuevos sonidos latinoamericanos y globales curados por MadNess Music Group.",
    seo: {
      title: "Latin Future - Nuevos sonidos latinos | MadNess Music Group",
      description:
        "Radar semanal de nuevos sonidos latinoamericanos y globales curados por MadNess Music Group.",
    },
    cover: "/images/playlists/madness-day-vibes.png",
    updatedAt: "2026-02-27",
  },
  {
    id: "madness-late-night",
    spotifyId: "5AlzpdhoRY5IJHigfhuRAQ",
    status: "evergreen",
    title: "MadNess Late Night",
    description:
      "Una seleccion sin fronteras donde todo convive: banda, reggaeton, trap y R&B en distintos idiomas y estilos.",
    cover: "/images/playlists/madness-late-night.png",
    updatedAt: "2026-02-28",
  },
  {
    id: "madness-radar",
    spotifyId: "3nyYLtmr7B44Cu469610fF",
    status: "evergreen",
    title: "MadNess Radar",
    description:
      "Radar curatorial de lanzamientos emergentes y tendencias actuales.",
    cover: "/images/playlists/madness-radar.png",
    updatedAt: "2026-02-28",
  },
  {
    id: "madness-pop-codes",
    spotifyId: "3Ay7ZskUw3ktEOe4tHtx9O",
    status: "evergreen",
    title: "Pop Codes",
    genre: ["Pop"],
    description:
      "Claves del pop global y latino: hooks, estructuras y sonidos que definen la cultura actual.",
    cover: "/images/playlists/madness-pop-codes.png",
    updatedAt: "2026-02-28",
  },
  {
    id: "madness-summer-vibes",
    spotifyId: "6OLCGm1tdPIRd76dmTKs7L",
    status: "evergreen",
    title: "Summer Vibes",
    description: "",
    cover: "/images/playlists/madness-summer-vibes.png",
    updatedAt: "2026-02-28",
  },
  {
    id: "residencia-estudio-records",
    spotifyId: "6aNbiLrTlKpWBViFL8drPr",
    status: "evergreen",
    title: "Residencia Estudio Records",
    description: "",
    cover: "",
    updatedAt: "2026-02-28",
  },
  {
    id: "las-mas-virales-matt-lasong",
    spotifyId: "4mck2BYnn3o4pXcwQknOlV",
    status: "evergreen",
    title: "Las Mas Virales | Matt Lasong",
    description: "",
    cover: "",
    updatedAt: "2026-02-28",
  },
];
