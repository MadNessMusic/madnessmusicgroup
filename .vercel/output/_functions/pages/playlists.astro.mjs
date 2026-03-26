import { e as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_D_1a7wqE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/MadNess Music Group - Logo Black_emOj480m.mjs';
import { p as playlists } from '../chunks/playlists_Bt-MSk8A.mjs';
import { a as getSpotifyPlaylist } from '../chunks/spotify_DTBALYMn.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_Dsc2b1-B.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Playlists = createComponent(async ($$result, $$props, $$slots) => {
  async function enrich(playlist) {
    if (!playlist.spotifyId) {
      return {
        ...playlist,
        image: playlist.cover
      };
    }
    try {
      const spotify = await getSpotifyPlaylist(playlist.spotifyId);
      return {
        ...playlist,
        title: spotify.name ?? playlist.title,
        description: spotify.description ?? playlist.description,
        image: spotify.images?.[0]?.url ?? playlist.cover
      };
    } catch (error) {
      console.error("Spotify playlist fallback:", playlist.spotifyId, error);
      return {
        ...playlist,
        image: playlist.cover
      };
    }
  }
  const enriched = await Promise.all(playlists.map(enrich));
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="max-w-7xl mx-auto px-6 py-24"> <h1 class="text-5xl font-anton mb-14">\nPlaylists curadas\n</h1> <input id="search" placeholder="Buscar playlists..." class="w-full md:w-96 bg-neutral-900 px-5 py-3 rounded-xl mb-10"> <select id="genreFilter" class="bg-neutral-900 px-4 py-3 rounded-xl mb-10"> <option value="">Todos los generos</option> </select> <div id="grid" class="grid grid-cols-2 md:grid-cols-4 gap-8"></div> </section> <script>(function(){', '\n    const grid = document.getElementById("grid");\n    const search = document.getElementById("search");\n    const genreFilter = document.getElementById("genreFilter");\n\n    let filtered = playlists;\n\n    const genres = [...new Set(playlists.flatMap((p) => p.genre ?? []))];\n\n    genres.forEach((genre) => {\n      const option = document.createElement("option");\n      option.value = genre;\n      option.textContent = genre;\n      genreFilter.appendChild(option);\n    });\n\n    function render() {\n      grid.innerHTML = "";\n\n      filtered.forEach((playlist) => {\n        const el = document.createElement("a");\n\n        el.href = `/playlists/${playlist.id}`;\n        el.className = "group";\n\n        el.innerHTML = `\n          <div class="aspect-square overflow-hidden rounded-xl">\n            <img\n              src="${playlist.image}"\n              class="w-full h-full object-cover group-hover:scale-105 transition"\n            />\n          </div>\n\n          <h2 class="font-anton mt-4">${playlist.title}</h2>\n          <p class="text-sm opacity-60">${playlist.description}</p>\n        `;\n\n        grid.appendChild(el);\n      });\n    }\n\n    function applyFilters() {\n      const query = search.value.toLowerCase();\n      const genre = genreFilter.value;\n\n      filtered = playlists.filter((playlist) => {\n        const matchSearch =\n          playlist.title.toLowerCase().includes(query) ||\n          playlist.description.toLowerCase().includes(query);\n\n        const matchGenre = !genre || (playlist.genre ?? []).includes(genre);\n\n        return matchSearch && matchGenre;\n      });\n\n      render();\n    }\n\n    search.addEventListener("input", applyFilters);\n    genreFilter.addEventListener("change", applyFilters);\n\n    render();\n  })();<\/script> '], [" ", " ", '<section class="max-w-7xl mx-auto px-6 py-24"> <h1 class="text-5xl font-anton mb-14">\nPlaylists curadas\n</h1> <input id="search" placeholder="Buscar playlists..." class="w-full md:w-96 bg-neutral-900 px-5 py-3 rounded-xl mb-10"> <select id="genreFilter" class="bg-neutral-900 px-4 py-3 rounded-xl mb-10"> <option value="">Todos los generos</option> </select> <div id="grid" class="grid grid-cols-2 md:grid-cols-4 gap-8"></div> </section> <script>(function(){', '\n    const grid = document.getElementById("grid");\n    const search = document.getElementById("search");\n    const genreFilter = document.getElementById("genreFilter");\n\n    let filtered = playlists;\n\n    const genres = [...new Set(playlists.flatMap((p) => p.genre ?? []))];\n\n    genres.forEach((genre) => {\n      const option = document.createElement("option");\n      option.value = genre;\n      option.textContent = genre;\n      genreFilter.appendChild(option);\n    });\n\n    function render() {\n      grid.innerHTML = "";\n\n      filtered.forEach((playlist) => {\n        const el = document.createElement("a");\n\n        el.href = \\`/playlists/\\${playlist.id}\\`;\n        el.className = "group";\n\n        el.innerHTML = \\`\n          <div class="aspect-square overflow-hidden rounded-xl">\n            <img\n              src="\\${playlist.image}"\n              class="w-full h-full object-cover group-hover:scale-105 transition"\n            />\n          </div>\n\n          <h2 class="font-anton mt-4">\\${playlist.title}</h2>\n          <p class="text-sm opacity-60">\\${playlist.description}</p>\n        \\`;\n\n        grid.appendChild(el);\n      });\n    }\n\n    function applyFilters() {\n      const query = search.value.toLowerCase();\n      const genre = genreFilter.value;\n\n      filtered = playlists.filter((playlist) => {\n        const matchSearch =\n          playlist.title.toLowerCase().includes(query) ||\n          playlist.description.toLowerCase().includes(query);\n\n        const matchGenre = !genre || (playlist.genre ?? []).includes(genre);\n\n        return matchSearch && matchGenre;\n      });\n\n      render();\n    }\n\n    search.addEventListener("input", applyFilters);\n    genreFilter.addEventListener("change", applyFilters);\n\n    render();\n  })();<\/script> '])), renderComponent($$result2, "Navbar", $$Navbar, {}), maybeRenderHead(), defineScriptVars({ playlists: enriched })) })}`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/playlists.astro", void 0);

const $$file = "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/playlists.astro";
const $$url = "/playlists";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Playlists,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
