import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from '../../chunks/astro/server_D_1a7wqE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/MadNess Music Group - Logo Black_emOj480m.mjs';
import { $ as $$SlugNavbar } from '../../chunks/SlugNavbar_CIxnZFj_.mjs';
import { a as getSpotifyPlaylist } from '../../chunks/spotify_DTBALYMn.mjs';
import { p as playlists } from '../../chunks/playlists_Bt-MSk8A.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
function getStaticPaths() {
  return playlists.map((playlist) => ({
    params: { id: playlist.id },
    props: { playlist }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { playlist } = Astro2.props;
  let spotifyData = null;
  if (playlist.spotifyId) {
    try {
      spotifyData = await getSpotifyPlaylist(playlist.spotifyId);
    } catch (error) {
      console.error("Spotify playlist fallback:", playlist.spotifyId, error);
    }
  }
  const title = spotifyData?.name ?? playlist.title;
  const description = spotifyData?.description || playlist.description;
  const spotifyUrl = spotifyData?.external_urls?.spotify ?? `https://open.spotify.com/playlist/${playlist.spotifyId}`;
  const seoTitle = playlist.seo?.title ?? `${title} | MadNess Music Group`;
  const seoDescription = playlist.seo?.description ?? description;
  const seoUrl = `https://www.madnessmusicgroup.com/playlists/${playlist.id}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": seoTitle, "description": seoDescription, "image": playlist.cover, "url": seoUrl }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SlugNavbar", $$SlugNavbar, {})} ${maybeRenderHead()}<section class="py-10 max-w-5xl mx-auto"> <div class="mb-8"> <button onclick="history.back()" class="text-xs uppercase tracking-[0.4em] opacity-40 hover:opacity-70 transition hover:cursor-pointer">
← Volver
</button> </div> <header class="mb-14"> <span class="block text-x1 uppercase tracking-[0.5em] opacity-70 mb-4">
Playlist curada
</span> <h1 class="font-anton text-5xl md:text-6xl leading-[1.05] mb-6"> ${title} </h1> <p class="max-w-2xl text-lg opacity-60 leading-relaxed mb-10"> ${description} </p> <a${addAttribute(spotifyUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-8 py-4 border border-white/40 text-xs uppercase tracking-[0.4em] hover:border-white hover:bg-white/5 transition-all">
Escuchar en Spotify →
</a> </header> <div class="rounded-4xl overflow-hidden border border-white/10 bg-black ring-3 ring-white/10"> <iframe${addAttribute(`https://open.spotify.com/embed/playlist/${playlist.spotifyId}`, "src")} class="w-full h-160 rounded-3xl" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> </div> <div class="mt-16 max-w-2xl opacity-30 text-sm leading-relaxed"> <p>
Esta playlist forma parte del archivo curatorial de MadNess Music Group.
        Un registro vivo de sonidos, escenas y movimientos que definen el
        presente.
</p> </div> </section> ` })}`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/playlists/[id].astro", void 0);

const $$file = "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/playlists/[id].astro";
const $$url = "/playlists/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
