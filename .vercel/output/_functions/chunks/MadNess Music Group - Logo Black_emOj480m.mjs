import { e as createComponent, r as renderTemplate, n as renderSlot, o as renderHead, g as addAttribute, h as createAstro, m as maybeRenderHead } from './astro/server_D_1a7wqE.mjs';
import 'piccolore';
import 'clsx';
/* empty css                           */

const siteConfig = {
  /** Main brand name (navbar / hero / footer) */
  siteName: "MadNess Music Group",
  /** SEO description */
  siteDescription: "MadNess Music Group es una disquera independiente con sede en Saltillo, Coahuila, Mexico. Fundada en 2026, se dedica a descubrir y promover talento musical emergente en distintos generos. Nuestra mision es apoyar a los artistas en su desarrollo creativo y llevar su musica a audiencias globales, ofreciendo una plataforma moderna para la distribucion y promocion musical.",
  /** Canonical site URL */
  siteUrl: "https://www.madnessmusicgroup.com",
  /** Open Graph image (public folder) */
  ogImage: "/og-image.jpg",
  /** Headquarters / footer address */
  address: {
    line1: "Pavo Real",
    line2: "Saltillo, Coahuila, Mexico"
  },
  /** Footer copyright */
  copyright: `(c) ${(/* @__PURE__ */ new Date()).getFullYear()} MadNess Music Group`,
  /** Footer disclaimer */
  disclaimer: "Este sitio funciona como una plataforma editorial y de promocion musical.",
  /** Navigation links */
  navLinks: [
    { href: "/", label: "Inicio" },
    { href: "#highlights", label: "Destacados" },
    { href: "/archive", label: "Archivo" },
    { href: "/playlists", label: "Playlists" },
    { href: "#contact", label: "Contacto" }
  ]
};

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "MadNess Music Group",
    description = "Archivo curatorial de playlists y sonidos contemporaneos",
    image,
    url
  } = Astro2.props;
  const fullTitle = `${title} | ${siteConfig.siteName}`;
  const canonicalUrl = url ? new URL(url) : new URL(Astro2.url.pathname, siteConfig.siteUrl);
  const ogImage = image ? image.startsWith("http") ? image : `${siteConfig.siteUrl}${image}` : `${siteConfig.siteUrl}${siteConfig.ogImage}`;
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"><link rel="icon" type="image/svg+xml" href="/favicon.png"><meta name="generator"', '><meta name="description"', "><title>", '</title><link rel="canonical"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:type" content="website"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;700;800&family=Manrope:wght@400;700&display=swap" rel="stylesheet"><script>\n      const theme = (() => {\n        if (localStorage.getItem("theme")) {\n          return localStorage.getItem("theme");\n        }\n        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n          return "dark";\n        }\n        return "light";\n      })();\n\n      document.documentElement.classList.toggle("dark", theme === "dark");\n      localStorage.setItem("theme", theme);\n    <\/script>', '</head> <body class="bg-base-100 text-base-content"> ', ' <script>\n      document.addEventListener("DOMContentLoaded", () => {\n        const revealElements = document.querySelectorAll(\n          ".reveal, .reveal-left, .reveal-right, .reveal-scale",\n        );\n\n        const observer = new IntersectionObserver(\n          (entries) => {\n            entries.forEach((entry) => {\n              if (entry.isIntersecting) {\n                entry.target.classList.add("visible");\n              }\n            });\n          },\n          { threshold: 0.15, rootMargin: "0px 0px -60px 0px" },\n        );\n\n        revealElements.forEach((el) => observer.observe(el));\n      });\n    <\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), addAttribute(description, "content"), fullTitle, addAttribute(canonicalUrl.toString(), "href"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(canonicalUrl.toString(), "content"), addAttribute(ogImage, "content"), addAttribute(fullTitle, "content"), addAttribute(description, "content"), addAttribute(ogImage, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/layouts/Layout.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$DarkModeToggle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<button id="theme-toggle" class="p-2 hover:bg-base-200 rounded-sm transition-colors group" aria-label="Toggle Dark Mode"> <svg id="sun-icon" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 hidden dark:block text-accent transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg> <svg id="moon-icon" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 block dark:hidden text-primary transition-transform group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg> </button> <script>\n  const themeToggle = document.getElementById("theme-toggle");\n\n  if (themeToggle) {\n    themeToggle.addEventListener("click", () => {\n      const element = document.documentElement;\n      element.classList.toggle("dark");\n\n      const isDark = element.classList.contains("dark");\n      localStorage.setItem("theme", isDark ? "dark" : "light");\n    });\n  }\n<\/script>'])), maybeRenderHead());
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/DarkModeToggle.astro", void 0);

const LogoLight = new Proxy({"src":"/_astro/MadNess Music Group - Logo White.DhUoJDa6.png","width":2229,"height":955,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/assets/MadNess Music Group - Logo White.png";
							}
							
							return target[name];
						}
					});

const LogoDark = new Proxy({"src":"/_astro/MadNess Music Group - Logo Black.BUqjNb1W.png","width":2227,"height":951,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/assets/MadNess Music Group - Logo Black.png";
							}
							
							return target[name];
						}
					});

export { $$Layout as $, LogoLight as L, LogoDark as a, $$DarkModeToggle as b, siteConfig as s };
