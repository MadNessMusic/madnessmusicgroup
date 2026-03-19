import { c as createComponent } from './astro-component_D_dNVjRF.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, r as renderTemplate, h as renderComponent } from './ssr-function_DryQiteE.mjs';
import { l as logoDark, L as LogoLight, s as siteConfig, $ as $$Layout } from './MadNess Music Group - Logo Black_QkEYe3Ri.mjs';
import { $ as $$Navbar } from './Navbar_D_bJDHZa.mjs';
import 'clsx';
import { p as playlists } from './playlists_C2DElisW.mjs';
import { r as releases } from './releases_BOo6sket.mjs';
import { g as getSpotifyAlbum, a as getSpotifyPlaylist } from './spotify_CyIkTtMW.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative min-h-screen flex items-center"> <div class="hero-content"> <div class="grid grid-cols-12 items-center"> <!-- Bloque Hero --> <div class="col-span-12 md:col-span-6 md:col-start-3"> <!-- Logo --> <div class="hero-logo-wrap"> <img${addAttribute(logoDark.src, "src")} alt="Madness Music Group" class="hero-logo hero-logo-light"> <img${addAttribute(LogoLight.src, "src")} alt="Madness Music Group" class="hero-logo hero-logo-dark"> </div> <!-- Background word --> <span class="absolute right-0.5 top-2/6 -translate-y-1/2 text-[25vw] font-anton opacity-[0.02] select-none" aria-hidden="true">
MADNESS
</span> <div class="pt-20 sm:pt-28 md:pt-32"> <!-- Eyebrow --> <span class="block text-2xl tracking-wider uppercase opacity-60 mb-8" data-i18n="hero.eyebrow">
Colectivo cultural · Música · Editorial
</span> <!-- Texto --> <p class="text-sm md:text-base opacity-70 leading-relaxed max-w-100px mb-15" data-i18n="hero.text">
Plataforma editorial y colectiva dedicada a curar,
            documentar y amplificar expresiones musicales contemporáneas.
</p> <!-- CTA --> <a href="#playlists" data-i18n="hero.cta" class="
    inline-flex items-center justify-center
    px-9 py-4
    border border-white/30
    rounded-full
    text-[11px]
    tracking-[0.45em]
    uppercase
    opacity-70
    transition-all duration-300 ease-out
    hover:opacity-100
    hover:border-white
    hover:-translate-y-0.5
    hover:shadow-[0_12px_40px_rgba(255,255,255,0.15)]
  "></a> </div> </div> </div> </div> </section>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Hero.astro", void 0);

const $$Highlights = createComponent(async ($$result, $$props, $$slots) => {
  function formatReleaseDate(date, precision) {
    if (precision === "year") return date;
    if (precision === "month") {
      const [y, m] = date.split("-");
      return `${m}/${y}`;
    }
    const d = new Date(date);
    return d.toLocaleDateString("es-MX", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  }
  function normalizeDate(date, precision) {
    if (precision === "year") return /* @__PURE__ */ new Date(`${date}-12-31`);
    if (precision === "month") return /* @__PURE__ */ new Date(`${date}-28`);
    return new Date(date);
  }
  function detectReleaseType(albumType, tracks) {
    if (albumType === "album") return "album";
    if (tracks && tracks >= 2 && tracks <= 6) return "ep";
    return "single";
  }
  async function getReleaseData(item) {
    try {
      const album = await getSpotifyAlbum(item.spotifyAlbumId);
      return {
        spotifyId: album.id,
        title: album.title,
        artist: album.artist,
        releaseDate: album.releaseDate,
        releasePrecision: album.releasePrecision,
        type: detectReleaseType(album.type, album.tracks?.length),
        image: album.image || item.fallbackCover,
        url: album.url,
        tracks: album.tracks
      };
    } catch (e) {
      console.error("Album error:", e);
      return {
        spotifyId: item.spotifyAlbumId,
        title: "Untitled",
        artist: "Unknown artist",
        releaseDate: "",
        releasePrecision: "day",
        type: "single",
        image: item.fallbackCover,
        url: "#",
        tracks: []
      };
    }
  }
  const allReleases = (await Promise.all(
    releases.map(
      (item) => getReleaseData({
        spotifyAlbumId: item.spotifyAlbumId,
        fallbackCover: item.cover
      })
    )
  )).sort((a, b) => {
    const dateA = normalizeDate(a.releaseDate, a.releasePrecision);
    const dateB = normalizeDate(b.releaseDate, b.releasePrecision);
    return dateB.getTime() - dateA.getTime();
  });
  const releasesData = allReleases.slice(0, 8);
  async function getPlaylistData(item) {
    if (!item.spotifyId) {
      return { ...item, image: item.cover };
    }
    try {
      const spotify = await getSpotifyPlaylist(item.spotifyId);
      return {
        ...item,
        title: spotify?.name || item.title,
        description: spotify?.description || item.description,
        image: spotify?.images?.[0]?.url || item.cover
      };
    } catch {
      return { ...item, image: item.cover };
    }
  }
  const featuredRaw = playlists.filter((p) => p.status === "featured");
  const featured = await Promise.all(
    featuredRaw.map(getPlaylistData)
  );
  const featuredPlaylist = featured[0];
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 mb-20 reveal"> <div class="flex items-center gap-10"> <span class="block w-30 h-px bg-white/10"></span> <span class="text-2xl tracking-[0.7em] uppercase opacity-20" data-i18n="section.highlights">
highlights
</span> <span class="flex-1 h-px bg-white/10"></span> </div> </div> <section id="highlights" class="py-20"> <div class="max-w-6xl mx-auto px-6"> <!-- HEADER --> <div class="max-w-3xl mb-24 reveal"> <h2 class="text-5xl font-anton mb-8" data-i18n="highlights.title"></h2> <p class="opacity-60 text-1xl leading-relaxed" data-i18n="highlights.subtitle"></p> </div> <!-- ROW 1 · LANZAMIENTOS (DINÁMICOS DESDE SPOTIFY) --> <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> ${releasesData.map((release, index) => renderTemplate`<div class="group"> <a${addAttribute(release.url, "href")} target="_blank" class="relative block rounded-2xl overflow-hidden aspect-4/3"> <img${addAttribute(release.image, "src")}${addAttribute(release.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn play">▶</div> <span data-i18n="playlist.listen" class="text-[11px] tracking-widest uppercase opacity-80">
Listen on Spotify
</span> </div> </a> <div class="mt-4"> <p class="font-anton text-lg font-black"> ${release.title} </p> <p class="text-sm opacity-60"> ${release.artist} </p> <div class="mt-2 flex flex-wrap items-center gap-3">  <span class="text-[10px] tracking-widest uppercase opacity-50"${addAttribute(`release.type.${release.type}`, "data-i18n")}></span> <span${addAttribute(`w-1.5 h-1.5 rounded-full ${release.type === "single" ? "bg-green-400" : release.type === "ep" ? "bg-purple-400" : "bg-blue-400"}`, "class")}></span>  ${index === 0 && renderTemplate`<span class="text-[10px] uppercase tracking-widest text-green-400" data-i18n="release.latest"></span>`} </div> <p class="text-[10px] tracking-widest uppercase opacity-30 mt-1"> ${formatReleaseDate(release.releaseDate, release.releasePrecision)} </p> </div> </div>`)} </div> <div class="relative my-24"> <div class="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"></div> </div> <!-- ROW 2 · 3 BLOQUES --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-30"> <!-- PRÓXIMAMENTE --> <a href="https://presave.link/aqui" target="_blank" class="group"> <div class="relative aspect-square rounded-xl overflow-hidden"> <img src="/images/releases/coming-soon.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <!-- Overlay --> <div class="absolute inset-0 bg-black/50
         opacity-0 group-hover:opacity-100
         transition
         flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn play">
+
</div> <span class="text-[11px] tracking-widest uppercase opacity-80" data-i18n="cta.presave"></span> </div> </div> <h4 class="font-anton text-base mt-4" data-i18n="highlights.upcoming.title"></h4> <p class="text-xs opacity-60 mb-2" data-i18n="highlights.upcoming.desc"></p> <span class="text-[10px] tracking-widest uppercase opacity-40" data-i18n="cta.presave"></span> </a> <!-- PLAYLIST · FEATURED DINÁMICA --> ${featuredPlaylist && renderTemplate`<a${addAttribute(`https://open.spotify.com/playlist/${featuredPlaylist.spotifyId}`, "href")} class="group"> <div class="relative aspect-square rounded-xl overflow-hidden"> <img${addAttribute(featuredPlaylist.image, "src")}${addAttribute(featuredPlaylist.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50
               opacity-0 group-hover:opacity-100
               transition
               flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn play">
▶
</div> <span class="text-[11px] tracking-widest uppercase opacity-80" data-i18n="cta.listen"></span> </div> </div> <h4 class="font-anton text-base mt-4"> ${featuredPlaylist.title} </h4> <p class="text-xs opacity-60 mb-2"> ${featuredPlaylist.description} </p> <span class="text-[10px] tracking-widest uppercase opacity-40" data-i18n="cta.playlist"></span> </a>`} <!-- ARCHIVO --> <a href="/archive" class="group"> <div class="relative aspect-square rounded-xl overflow-hidden bg-neutral-900 flex items-center justify-center"> <img src="/images/archive/archive-cover.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50
         opacity-0 group-hover:opacity-100
         transition
         flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn search">
⌕
</div> <span class="text-[11px] tracking-widest uppercase opacity-80" data-i18n="cta.archive"></span> </div> </div> <h4 class="font-anton text-base mt-4" data-i18n="highlights.archive.title"></h4> <p class="text-xs opacity-60 mb-2" data-i18n="highlights.archive.desc"></p> <span class="text-[10px] tracking-widest uppercase opacity-40" data-i18n="cta.archive"></span> </a> </div> </div></section>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Highlights.astro", void 0);

const $$Playlists = createComponent(async ($$result, $$props, $$slots) => {
  async function getPlaylistData(item) {
    if (!item.spotifyId) {
      return {
        ...item,
        image: item.cover,
        spotifyUrl: item.spotifyUrl ?? "#",
        trackCount: 0,
        followers: 0
      };
    }
    try {
      const spotify = await getSpotifyPlaylist(item.spotifyId);
      return {
        ...item,
        title: spotify.name || item.title,
        description: spotify.description || item.description,
        image: spotify.images?.[0]?.url || item.cover,
        spotifyUrl: spotify.external_urls?.spotify || item.spotifyUrl,
        trackCount: spotify.tracks?.total ?? 0,
        followers: spotify.followers?.total ?? 0
      };
    } catch (e) {
      console.error("Spotify error:", item.spotifyId);
      return {
        ...item,
        image: item.cover,
        spotifyUrl: item.spotifyUrl ?? "#",
        trackCount: 0,
        followers: 0
      };
    }
  }
  const featuredRaw = playlists.filter((p) => p.status === "featured");
  const evergreenRaw = playlists.filter((p) => p.status === "evergreen");
  const archiveRaw = playlists.filter((p) => p.status === "archive");
  const featured = await Promise.all(featuredRaw.map(getPlaylistData));
  const evergreen = await Promise.all(evergreenRaw.map(getPlaylistData));
  await Promise.all(archiveRaw.map(getPlaylistData));
  const evergreenLimited = evergreen.slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 mb-20 reveal"> <div class="flex items-center gap-10"> <span class="block w-30 h-px bg-white/10"></span> <span class="text-2xl tracking-[0.7em] uppercase opacity-20" data-i18n="section.playlists">
playlists
</span> <span class="flex-1 h-px bg-white/10"></span> </div> </div> <section id="playlists" class="py-10"> <!-- HEADER EDITORIAL --> <div class="max-w-3xl mb-24"> <h2 class="text-5xl font-anton mb-8" data-i18n="playlists.title"></h2> <p data-i18n="playlists.intro" class="opacity-60 text-1xl leading-relaxed"></p> </div> <!-- FEATURED --> <div class="space-y-20 md:space-y-28 mb-40"> ${featured.map((item, i) => {
    const isEven = i % 2 === 1;
    return renderTemplate`<a${addAttribute(`/playlists/${item.id}`, "href")}${addAttribute(`block group reveal delay-${(i + 1) * 100}`, "class")}> <div class="grid grid-cols-12 gap-6 md:gap-12 items-start md:items-center"> <!-- IMAGEN --> <div${addAttribute(`
              col-span-12 md:col-span-4
              overflow-hidden rounded-xl
              ${isEven ? "md:col-start-9" : ""}
            `, "class")}> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full aspect-4/5 md:aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.05]"> </div> <!-- TEXTO --> <div${addAttribute(`
              col-span-12 md:col-span-8
              ${isEven ? "md:col-start-1 md:row-start-1" : ""}
            `, "class")}> <h4 class="font-anton text-xl xl:text-2xl leading-1.1 mt-4"> ${item.title} </h4> <span class="block w-16 h-px bg-white/20 mb-6"></span> <p class="opacity-55 text-base md:text-lg max-w-md mb-8 md:mb-10"> ${item.description} </p> <p class="opacity-40 text-xs tracking-widest uppercase mt-2">
• ${(item.followers ?? 0).toLocaleString()} <span data-i18n="playlist.saves"></span> </p> <span data-i18n="playlist.view" class="
                inline-flex items-center gap-4
                tracking-widest uppercase
                opacity-40
                group-hover:opacity-100
                transition
              "></span> </div> </div> </a>`;
  })} </div> <!-- BLOQUE EXPLORAR --> <div class="
    grid
    grid-cols-2
    sm:grid-cols-2
    md:grid-cols-3
    xl:grid-cols-4
    gap-14
    xl:gap-16
    evergreen-container
  "> ${evergreenLimited.map((item, i) => renderTemplate`<a${addAttribute(`/playlists/${item.id}`, "href")} rel="noopener noreferrer"${addAttribute(`group reveal delay-${(i + 1) * 100}`, "class")}> <!-- COVER --> <div class="relative w-full aspect-square overflow-hidden rounded-2xl bg-neutral-900"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"> <!-- OVERLAY --> <div class="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-end p-6"> <span data-i18n="playlist.view" class="tracking-widest uppercase opacity-40 group-hover:opacity-100 transition"></span> </div> </div> <!-- TEXT --> <h4 class="font-anton text-xl xl:text-2xl leading-1.1 mt-4">${item.title}</h4> <p class="opacity-50 text-sm mt-2 leading-relaxed max-w-xs">${item.description}</p> <p class="opacity-40 text-xs tracking-widest uppercase mt-2">
• ${(item.followers ?? 0).toLocaleString()} <span data-i18n="playlist.saves"></span> </p> </a>`)} </div> <!-- CTA FINAL --> <div class="text-center mt-32 reveal mb-30"> <a href="/playlists" data-i18n="playlists.cta" class="btn-tactical px-12 py-4"></a> </div> </section>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Playlists.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<div class="mx-auto px-6 mb-20 reveal"> <div class="flex items-center gap-10"> <span class="block w-30 h-px bg-white/10"></span> <span class="text-2xl tracking-[0.7em] uppercase opacity-20" data-i18n="section.contact">\ncontact\n</span> <span class="flex-1 h-px bg-white/10"></span> </div> </div> <section id="contact" class="reveal mx-auto scroll py-10 mb-40"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> <!-- Columna editorial --> <div> <h2 class="font-heading text-5xl md:text-6xl mb-6" data-i18n="contact.title">\nHablemos\n</h2> <p class="opacity-70 leading-relaxed mb-6" data-i18n="contact.text">\nEscríbenos para colaboraciones, propuestas editoriales o prensa.\n</p> <!-- Métodos alternativos --> <div class="flex gap-4 mt-2"> <a href="https://mail.google.com/mail/?view=cm&to=contact@madnessmusicgroup.com" target="_blank" class="btn-tactical" data-i18n="contact.mail.button">\nCorreo\n</a> <a href="https://wa.me/528442564688?text=Hola%20MadNess%20Music%20Group" target="_blank" class="btn-tactical" data-i18n="contact.whatsapp">\nWhatsApp\n</a> </div> </div> <!-- Formulario --> <!--form\n  name="contact"\n  method="POST"\n  data-netlify="true"\n  netlify-honeypot="bot-field"\n  class="flex flex-col gap-2"\n--> <form action="https://formspree.io/f/xnjbypyv" method="POST" class="flex flex-col gap-2"> <!-- Netlify required --> <input type="hidden" name="form-name" value="contact"> <!-- Honeypot --> <p class="hidden"> <label>\nDon’t fill this out:\n<input name="bot-field"> </label> </p> <!-- Nombre --> <label for="name" class="text-xs uppercase tracking-widest opacity-50" data-i18n="contact.name.label">\nNombre\n</label> <input id="name" name="name" type="text" placeholder="Nombre" required class="bg-transparent border-b border-white/20 py-2 mb-10\n           focus:outline-none focus:border-white\n           transition-colors duration-300" data-i18n-placeholder="contact.name"> <!-- Correo --> <label for="email" class="text-xs uppercase tracking-widest opacity-50" data-i18n="contact.mail.label">\nCorreo\n</label> <input id="email" name="email" type="email" placeholder="Mail" required class="bg-transparent border-b border-white/20 py-2 mb-10\n           focus:outline-none focus:border-white\n           transition-colors duration-300" data-i18n-placeholder="contact.mail"> <!-- Mensaje --> <label for="message" class="text-xs uppercase tracking-widest opacity-50" data-i18n="contact.message.label">\nCuéntanos en qué podemos ayudarte\n</label> <textarea id="message" name="message" rows="4" placeholder="Mensaje" class="bg-transparent border-b border-white/20 py-2\n           focus:outline-none resize-none" data-i18n-placeholder="contact.message"></textarea> <!-- Redirect --> <input type="hidden" name="redirect" value="/gracias"> <!-- Submit --> <button type="submit" class="btn-tactical self-start flex items-center gap-3 hover:cursor-pointer mt-5"> <span class="btn-text" data-i18n="contact.send">Enviar mensaje</span> <span class="btn-loader hidden w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span> </button> </form> </div> </section> <script src="/scripts/contact-form.js" defer><\/script>'])), maybeRenderHead());
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Contact.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-secondary text-primary-content pt-12 sm:pt-20 pb-8 sm:pb-10 border-t border-primary/20"> <div class="max-w-325 mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-12 sm:mb-20"> <div class="col-span-1 sm:col-span-2"> <div class="flex items-center gap-4 mb-6"> <img${addAttribute(logoDark.src, "src")}${addAttribute(`${siteConfig.siteName} Logo`, "alt")} class="w-14 h-14 object-contain"> <h2 class="text-3xl tracking-tighter">${siteConfig.siteName}</h2> </div> <p data-i18n="footer.desc" class="text-sm opacity-60 leading-relaxed max-w-md"> ${siteConfig.siteDescription} </p> </div> <div> <h3 data-i18n="footer.nav" class="text-xs uppercase font-bold tracking-widest mb-6 text-accent">
Navigation
</h3> <ul class="space-y-4 text-sm opacity-80 uppercase tracking-widest text-[10px] font-bold"> ${siteConfig.navLinks.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:text-accent transition-colors"${addAttribute(link.i18nKey, "data-i18n")}> ${link.label} </a> </li>`)} </ul> </div> <div> <h3 data-i18n="footer.hq" class="text-xs uppercase font-bold tracking-widest mb-6 text-accent">
Headquarters
</h3> <ul class="space-y-4 text-sm opacity-60"> <li class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1 shrink-0"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg> ${siteConfig.address.line1}<br>${siteConfig.address.line2} </li> </ul> </div> </div> <div class="max-w-325 mx-auto px-4 sm:px-6 pt-8 sm:pt-10 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest opacity-40"> <div data-i18n="footer.copyright">${siteConfig.copyright}</div> <div data-i18n="footer.disclaimer" class="text-center md:text-right max-w-md"> ${siteConfig.disclaimer} </div> </div> </footer>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Footer.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, {})} ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Highlights", $$Highlights, {})} ${renderComponent($$result2, "Playlists", $$Playlists, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} </main> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/index.astro", void 0);

const $$file = "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
