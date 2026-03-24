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
    "MadNess Music Group es una disquera independiente con sede en Saltillo, Coahuila, México. Fundada en 2026, se dedica a descubrir y promover talento musical emergente en distintos géneros. Nuestra misión es apoyar a los artistas en su desarrollo creativo y llevar su música a audiencias globales, ofreciendo una plataforma moderna para la distribución y promoción musical.",

  /** Canonical site URL */
  siteUrl: "https://www.madnessmusicgroup.com",

  /** Open Graph image (public folder) */
  ogImage: "/og-image.jpg",

  /** Headquarters / footer address */
  address: {
    line1: "Pavo Real",
    line2: "Saltillo, Coahuila, México",
  },

  /** Footer copyright */
  copyright: `© ${new Date().getFullYear()} MadNess Music Group`,

  /** Footer disclaimer */
  disclaimer:
    "Este sitio funciona como una plataforma editorial y de promoción musical.",

  /** Navigation links */
  navLinks: [
    { href: "/", label: "Inicio", i18nKey: "nav.home" },
    { href: "#highlights", label: "Destacados", i18nKey: "nav.highlights" },
    { href: "/archive", label: "Archivo", i18nKey: "nav.archive" },
    { href: "/playlists", label: "Playlists", i18nKey: "nav.playlists" },
    { href: "#contact", label: "Contacto", i18nKey: "nav.contact" },
  ],
};