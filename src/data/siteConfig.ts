export const siteConfig = {
  siteName: "MadNess Music Group",

  siteDescription:
    "MadNess Music Group es un sello independiente con sede en Saltillo, Coahuila, Mexico. Fundada en 2026, se dedica a descubrir y promover talento musical emergente en distintos géneros. Nuestra misión es apoyar a los artistas en su desarrollo creativo y llevar su música a audiencias globales, ofreciendo una plataforma moderna para la distribución y promoción musical.",

  siteUrl: "https://www.madnessmusicgroup.com",

  ogImage: "/og-image.jpg",

  address: {
    line1: "Pavo Real",
    line2: "Saltillo, Coahuila, Mexico",
  },

  copyright: `(c) ${new Date().getFullYear()} MadNess Music Group`,

  disclaimer:
    "Este sitio funciona como una plataforma editorial y de promoción musical.",

  navLinks: [
    { href: "/", label: "Inicio" },
    { href: "/#highlights", label: "Destacados" }, // 🔥 FIX
    { href: "/archive", label: "Archivo" },
    { href: "/playlists", label: "Playlists" },
    { href: "/#contact", label: "Contacto" }, // 🔥 FIX
  ],
};