import { c as createComponent } from './astro-component_DJxKiPnQ.mjs';
import 'piccolore';
import { h as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from './ssr-function_BIp3FfZD.mjs';
import { $ as $$Layout } from './MadNess Music Group - Logo Black_CJMpTH22.mjs';
import { $ as $$SlugNavbar } from './SlugNavbar_BTisHLoE.mjs';
import { a as getSpotifyPlaylist } from './spotify_MfsF6F_A.mjs';
import { p as playlists } from './playlists_C2DElisW.mjs';

const prerender = false;
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const playlist = playlists.find((p) => p.id === id);
  if (!playlist) throw new Error("Playlist no encontrada");
  let spotifyData = null;
  if (playlist.spotifyId) {
    try {
      spotifyData = await getSpotifyPlaylist(playlist.spotifyId);
    } catch (err) {
      console.error("Spotify error:", err);
    }
  }
  const title = spotifyData?.name ?? playlist.title;
  const description = spotifyData?.description || playlist.description;
  spotifyData?.externalUrl ?? `https://open.spotify.com/playlist/${playlist.spotifyId}`;
  const seoTitle = playlist.seo?.title ?? `${title} | MadNess Music Group`;
  const seoDescription = playlist.seo?.description ?? description;
  const seoUrl = `https://www.madnessmusicgroup.com/playlists/${playlist.id}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "image": playlist.cover, "url": seoUrl }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SlugNavbar", $$SlugNavbar, {})} ${maybeRenderHead()}<section class="py-10 max-w-5xl mx-auto"> <!-- BACK --> <div class="mb-8"> <button onclick="history.back()" class="text-xs uppercase tracking-[0.4em] opacity-40 hover:opacity-70 transition hover:cursor-pointer" data-i18n="common.back">
← Volver
</button> </div> <!-- HEADER --> <header class="mb-14"> <span class="block text-x1 uppercase tracking-[0.5em] opacity-70 mb-4" data-i18n="playlist.curated.slug">
Curated Playlist
</span> <h1 class="font-anton text-5xl md:text-6xl leading-[1.05] mb-6"> ${title} </h1> <p class="max-w-2xl text-lg opacity-60 leading-relaxed mb-10"> ${description} </p> <a${addAttribute(`https://open.spotify.com/playlist/${playlist.spotifyId}`, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4
             border border-white/40
             text-xs uppercase tracking-[0.4em]
             hover:border-white hover:bg-white/5
             transition-all" data-i18n="playlist.listen">
Escuchar en Spotify →
</a> </header> <!-- SPOTIFY PLAYER --> <div class="rounded-4xl overflow-hidden border border-white/10 bg-black ring-3 ring-white/10"> <iframe${addAttribute(`https://open.spotify.com/embed/playlist/${playlist.spotifyId}`, "src")} class="w-full h-160 rounded-3xl" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> </div> <div class="mt-16 max-w-2xl opacity-30 text-sm leading-relaxed"> <p data-i18n="playlist.context">
Esta playlist forma parte del archivo curatorial de MadNess Music Group.
    Un registro vivo de sonidos, escenas y movimientos que definen el presente.
</p> </div> </section> ` })}`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/playlists/[id].astro", void 0);

const $$file = "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/playlists/[id].astro";
const $$url = "/playlists/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
