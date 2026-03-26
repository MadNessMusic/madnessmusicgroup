import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_D_1a7wqE.mjs';
import 'piccolore';
import { a as LogoDark, L as LogoLight, $ as $$Layout } from '../chunks/MadNess Music Group - Logo Black_emOj480m.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_Dsc2b1-B.mjs';
import 'clsx';
import { p as playlists } from '../chunks/playlists_Bt-MSk8A.mjs';
import { r as releases } from '../chunks/releases_CbbvC55m.mjs';
import { g as getSpotifyAlbum, a as getSpotifyPlaylist } from '../chunks/spotify_DTBALYMn.mjs';
import { $ as $$Footer } from '../chunks/Footer_CCR7st14.mjs';
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="hero" class="relative min-h-screen flex items-center"> <div class="hero-content"> <div class="grid grid-cols-12 items-center"> <div class="col-span-12 md:col-span-6 md:col-start-3"> <div class="hero-logo-wrap"> <img${addAttribute(LogoDark.src, "src")} alt="Madness Music Group" class="hero-logo hero-logo-light"> <img${addAttribute(LogoLight.src, "src")} alt="Madness Music Group" class="hero-logo hero-logo-dark"> </div> <span class="absolute right-0.5 top-2/6 -translate-y-1/2 text-[25vw] font-anton opacity-[0.02] select-none" aria-hidden="true">
MADNESS
</span> <div class="pt-20 sm:pt-28 md:pt-32"> <span class="block text-2xl tracking-wider uppercase opacity-60 mb-8">
Colectivo cultural · Musica · Editorial
</span> <p class="text-sm md:text-base opacity-70 leading-relaxed max-w-100px mb-15">
Plataforma editorial y colectiva dedicada a curar, documentar y
            amplificar expresiones musicales contemporaneas.
</p> <a href="#playlists" class="
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
            ">
Explorar ↓
</a> </div> </div> </div> </div> </section>`;
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
  return renderTemplate`<!-- HEADER LINE -->${maybeRenderHead()}<div class="mx-auto px-6 mb-20 reveal"> <div class="flex items-center gap-10"> <span class="block w-30 h-px bg-white/10"></span> <span class="text-2xl tracking-[0.7em] uppercase opacity-20">
DESTACADOS
</span> <span class="flex-1 h-px bg-white/10"></span> </div> </div> <section id="highlights" class="py-20"> <div class="max-w-6xl mx-auto px-6"> <!-- HEADER --> <div class="max-w-3xl mb-24 reveal"> <h2 class="text-5xl font-anton mb-8">
Destacados: lo nuevo en el archivo
</h2> <p class="opacity-60 text-1xl leading-relaxed">
Publicaciones destacadas
</p> </div> <!-- ROW 1 · RELEASES --> <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"> ${releasesData.map((release, index) => renderTemplate`<div class="group"> <a${addAttribute(release.url, "href")} target="_blank" class="relative block rounded-2xl overflow-hidden aspect-4/3"> <img${addAttribute(release.image, "src")}${addAttribute(release.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn play">▶</div> <span class="text-[11px] tracking-widest uppercase opacity-80">
Escuchar en Spotify
</span> </div> </a> <div class="mt-4"> <p class="font-anton text-lg font-black"> ${release.title} </p> <p class="text-sm opacity-60"> ${release.artist} </p> <div class="mt-2 flex items-center gap-3"> <!-- TYPE --> <span class="text-[10px] tracking-widest uppercase opacity-50"> ${release.type} </span> <span${addAttribute(`w-1.5 h-1.5 rounded-full ${release.type === "single" ? "bg-green-400" : release.type === "ep" ? "bg-purple-400" : "bg-blue-400"}`, "class")}></span> <!-- MÁS RECIENTE --> ${index === 0 && renderTemplate`<span class="text-[10px] uppercase tracking-widest text-green-400">
Más reciente
</span>`} </div> <p class="text-[10px] tracking-widest uppercase opacity-30 mt-1"> ${formatReleaseDate(release.releaseDate, release.releasePrecision)} </p> </div> </div>`)} </div> <div class="relative my-24"> <div class="h-px w-full bg-linear-to-r from-transparent via-white/10 to-transparent"></div> </div> <!-- ROW 2 --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 mb-30"> <!-- PRÓXIMAMENTE --> <a href="https://presave.link/aqui" target="_blank" class="group"> <div class="relative aspect-square rounded-xl overflow-hidden"> <img src="/images/releases/coming-soon.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn play">+</div> <span class="text-[11px] tracking-widest uppercase opacity-80">
Pre-save
</span> </div> </div> <h4 class="font-anton text-base mt-4">
Próximamente
</h4> <p class="text-xs opacity-60 mb-2">
Nuevos lanzamientos en camino.
</p> <span class="text-[10px] tracking-widest uppercase opacity-40">
Pre-save
</span> </a> <!-- PLAYLIST FEATURED --> ${featuredPlaylist && renderTemplate`<a${addAttribute(`https://open.spotify.com/playlist/${featuredPlaylist.spotifyId}`, "href")} class="group"> <div class="relative aspect-square rounded-xl overflow-hidden"> <img${addAttribute(featuredPlaylist.image, "src")}${addAttribute(featuredPlaylist.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn play">▶</div> <span class="text-[11px] tracking-widest uppercase opacity-80">
Escuchar
</span> </div> </div> <h4 class="font-anton text-base mt-4"> ${featuredPlaylist.title} </h4> <p class="text-xs opacity-60 mb-2"> ${featuredPlaylist.description} </p> <span class="text-[10px] tracking-widest uppercase opacity-40">
Escuchar playlist →
</span> </a>`} <!-- ARCHIVO --> <a href="/archive" class="group"> <div class="relative aspect-square rounded-xl overflow-hidden bg-neutral-900"> <img src="/images/archive/archive-cover.png" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"> <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end gap-3 p-6"> <div class="spotify-btn search">⌕</div> <span class="text-[11px] tracking-widest uppercase opacity-80">
Explorar catálogo
</span> </div> </div> <h4 class="font-anton text-base mt-4">
Del archivo
</h4> <p class="text-xs opacity-60 mb-2">
Joyas pasadas que siguen vigentes.
</p> <span class="text-[10px] tracking-widest uppercase opacity-40">
Explorar catálogo →
</span> </a> </div> </div> </section>`;
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
    } catch (error) {
      console.error("Spotify playlist fallback:", item.spotifyId, error);
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
  const featured = await Promise.all(featuredRaw.map(getPlaylistData));
  const evergreen = await Promise.all(evergreenRaw.map(getPlaylistData));
  const evergreenLimited = evergreen.slice(0, 4);
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 mb-20 reveal"> <div class="flex items-center gap-10"> <span class="block w-30 h-px bg-white/10"></span> <span class="text-2xl tracking-[0.7em] uppercase opacity-20">
PLAYLISTS
</span> <span class="flex-1 h-px bg-white/10"></span> </div> </div> <section id="playlists" class="py-10"> <div class="max-w-3xl mb-24"> <h2 class="text-5xl font-anton mb-8">
Playlists curadas
</h2> <p class="opacity-60 text-1xl leading-relaxed">
Explora nuestras playlists curadas, disenadas para acompanar cada momento
      del dia con la mejor musica.
</p> </div> <div class="space-y-20 md:space-y-28 mb-40"> ${featured.map((item, i) => {
    const isEven = i % 2 === 1;
    return renderTemplate`<a${addAttribute(`/playlists/${item.id}`, "href")}${addAttribute(`block group reveal delay-${(i + 1) * 100}`, "class")}> <div class="grid grid-cols-12 gap-6 md:gap-12 items-start md:items-center"> <div${addAttribute(`
                col-span-12 md:col-span-4
                overflow-hidden rounded-xl
                ${isEven ? "md:col-start-9" : ""}
              `, "class")}> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full aspect-4/5 md:aspect-square object-cover transition-transform duration-700 group-hover:scale-[1.05]"> </div> <div${addAttribute(`
                col-span-12 md:col-span-8
                ${isEven ? "md:col-start-1 md:row-start-1" : ""}
              `, "class")}> <h4 class="font-anton text-xl xl:text-2xl leading-1.1 mt-4"> ${item.title} </h4> <span class="block w-16 h-px bg-white/20 mb-6"></span> <p class="opacity-55 text-base md:text-lg max-w-md mb-8 md:mb-10"> ${item.description} </p> <p class="opacity-40 text-xs tracking-widest uppercase mt-2">
• ${(item.followers ?? 0).toLocaleString()} guardados
</p> <span class="
                  inline-flex items-center gap-4
                  tracking-widest uppercase
                  opacity-40
                  group-hover:opacity-100
                  transition
                ">
Ver playlist →
</span> </div> </div> </a>`;
  })} </div> <div class="
      grid
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      xl:grid-cols-4
      gap-14
      xl:gap-16
      evergreen-container
    "> ${evergreenLimited.map((item, i) => renderTemplate`<a${addAttribute(`/playlists/${item.id}`, "href")} rel="noopener noreferrer"${addAttribute(`group reveal delay-${(i + 1) * 100}`, "class")}> <div class="relative w-full aspect-square overflow-hidden rounded-2xl bg-neutral-900"> <img${addAttribute(item.image, "src")}${addAttribute(item.title, "alt")} class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"> <div class="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition flex items-end p-6"> <span class="tracking-widest uppercase opacity-40 group-hover:opacity-100 transition">
Ver playlist →
</span> </div> </div> <h4 class="font-anton text-xl xl:text-2xl leading-1.1 mt-4">${item.title}</h4> <p class="opacity-50 text-sm mt-2 leading-relaxed max-w-xs">${item.description}</p> <p class="opacity-40 text-xs tracking-widest uppercase mt-2">
• ${(item.followers ?? 0).toLocaleString()} guardados
</p> </a>`)} </div> <div class="text-center mt-32 reveal mb-30"> <a href="/playlists" class="btn-tactical px-12 py-4">
Ver catalogo completo →
</a> </div> </section>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Playlists.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto px-6 mb-20 reveal"> <div class="flex items-center gap-10"> <span class="block w-30 h-px bg-white/10"></span> <span class="text-2xl tracking-[0.7em] uppercase opacity-20">
CONTACTO
</span> <span class="flex-1 h-px bg-white/10"></span> </div> </div> <section id="contact" class="reveal mx-auto scroll py-10 mb-40"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> <div> <h2 class="font-heading text-5xl md:text-6xl mb-6">
Conectemos
</h2> <p class="opacity-70 leading-relaxed mb-6">
Colaboraciones, propuestas editoriales, prensa o proyectos especiales.
        Cuentanos que tienes en mente.
</p> <div class="flex gap-4 mt-2"> <a href="https://mail.google.com/mail/?view=cm&to=contact@madnessmusicgroup.com" target="_blank" class="btn-tactical">
Correo
</a> <a href="https://wa.me/528442564688?text=Hola%20MadNess%20Music%20Group" target="_blank" class="btn-tactical">
WhatsApp
</a> </div> </div> <form action="https://formspree.io/f/xnjbypyv" method="POST" class="flex flex-col gap-2"> <input type="hidden" name="form-name" value="contact"> <p class="hidden"> <label>
Do not fill this out:
<input name="bot-field"> </label> </p> <label for="name" class="text-xs uppercase tracking-widest opacity-50">
Cual es tu nombre?
</label> <input id="name" name="name" type="text" placeholder="Nombre" required class="bg-transparent border-b border-white/20 py-2 mb-10 focus:outline-none focus:border-white transition-colors duration-300"> <label for="email" class="text-xs uppercase tracking-widest opacity-50">
Cual es tu correo?
</label> <input id="email" name="email" type="email" placeholder="Correo" required class="bg-transparent border-b border-white/20 py-2 mb-10 focus:outline-none focus:border-white transition-colors duration-300"> <label for="message" class="text-xs uppercase tracking-widest opacity-50">
Cuentanos en que podemos ayudarte
</label> <textarea id="message" name="message" rows="4" placeholder="Mensaje" class="bg-transparent border-b border-white/20 py-2 focus:outline-none resize-none"></textarea> <input type="hidden" name="redirect" value="/gracias"> <button type="submit" class="btn-tactical self-start flex items-center gap-3 hover:cursor-pointer mt-5"> <span class="btn-text">
Enviar mensaje
</span> <span class="btn-loader hidden w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin"></span> </button> </form> </div> </section>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/Contact.astro", void 0);

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
