/**
 * ============================================
 * SITE CONFIGURATION
 * ============================================
 * Edit this file to customize the template.
 * All site-wide settings live here.
 */

export const siteConfig = {
  /** Main brand name (navbar / hero / footer) */
  siteName: "MadNess Music Group",

  /** SEO description */
  siteDescription:
    "MadNess Music Group es una disquera independiente con sede en Saltillo, Coahuila, Mexico. Fundada en 2026, se dedica a descubrir y promover talento musical emergente en distintos generos. Nuestra mision es apoyar a los artistas en su desarrollo creativo y llevar su musica a audiencias globales, ofreciendo una plataforma moderna para la distribucion y promocion musical.",

  /** Canonical site URL */
  siteUrl: "https://www.madnessmusicgroup.com",

  /** Open Graph image (public folder) */
  ogImage: "/og-image.jpg",

  /** Headquarters / footer address */
  address: {
    line1: "Pavo Real",
    line2: "Saltillo, Coahuila, Mexico",
  },

  /** Footer copyright */
  copyright: `(c) ${new Date().getFullYear()} MadNess Music Group`,

  /** Footer disclaimer */
  disclaimer:
    "Este sitio funciona como una plataforma editorial y de promoción musical.",

  /** Navigation links */
  navLinks: [
    { href: "/", label: "Inicio" },
    { href: "#highlights", label: "Destacados" },
    { href: "/archive", label: "Archivo" },
    { href: "/playlists", label: "Playlists" },
    { href: "#contact", label: "Contacto" },
  ],
};
