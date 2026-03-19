import { c as createComponent } from './astro-component_D_dNVjRF.mjs';
import 'piccolore';
import { r as renderTemplate, g as defineScriptVars, m as maybeRenderHead, h as renderComponent } from './ssr-function_DryQiteE.mjs';
import { $ as $$Layout } from './MadNess Music Group - Logo Black_QkEYe3Ri.mjs';
import { p as playlists } from './playlists_C2DElisW.mjs';
import { a as getSpotifyPlaylist } from './spotify_CyIkTtMW.mjs';
import { $ as $$Navbar } from './Navbar_D_bJDHZa.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Playlists = createComponent(async ($$result, $$props, $$slots) => {
  async function enrich(p) {
    if (!p.spotifyId) {
      return {
        ...p,
        image: p.cover
      };
    }
    try {
      const s = await getSpotifyPlaylist(p.spotifyId);
      return {
        ...p,
        title: s.name ?? p.title,
        description: s.description ?? p.description,
        image: s.images?.[0]?.url ?? p.cover
      };
    } catch {
      return {
        ...p,
        image: p.cover
      };
    }
  }
  const enriched = await Promise.all(playlists.map(enrich));
  return renderTemplate(_a || (_a = __template(["", " ", " ", '<section class="max-w-7xl mx-auto px-6 py-24"> <h1 class="text-5xl font-anton mb-14" data-i18n="playlists.title"></h1> <input id="search" placeholder="Search playlists..." data-i18n-placeholder="playlists.search" class="w-full md:w-96 bg-neutral-900 px-5 py-3 rounded-xl mb-10"> <select id="genreFilter" class="bg-neutral-900 px-4 py-3 rounded-xl mb-10"> <option value="" data-i18n="playlists.genres.all"></option> </select> <div id="grid" class="grid grid-cols-2 md:grid-cols-4 gap-8"></div> </section> <script>(function(){', '\n\nconst grid = document.getElementById("grid")\nconst search = document.getElementById("search")\nconst genreFilter = document.getElementById("genreFilter")\n\nlet filtered = playlists\n\n// detectar géneros\nconst genres = [...new Set(\nplaylists.flatMap(p => p.genre ?? [])\n)]\n\ngenres.forEach(g => {\n\nconst o = document.createElement("option")\n\no.value = g\no.textContent = g\n\ngenreFilter.appendChild(o)\n\n})\n\n// render\nfunction render(){\n\ngrid.innerHTML = ""\n\nfiltered.forEach(p => {\n\nconst el = document.createElement("a")\n\nel.href = "/playlists/" + p.id\nel.className = "group"\n\nel.innerHTML = `\n\n<div class="aspect-square overflow-hidden rounded-xl">\n\n<img\nsrc="${p.image}"\nclass="w-full h-full object-cover group-hover:scale-105 transition"\n/>\n\n</div>\n\n<h2 class="font-anton mt-4">\n${p.title}\n</h2>\n\n<p class="text-sm opacity-60">\n${p.description}\n</p>\n\n`\n\ngrid.appendChild(el)\n\n})\n\n}\n\n// filtros\nfunction applyFilters(){\n\nconst q = search.value.toLowerCase()\nconst g = genreFilter.value\n\nfiltered = playlists.filter(p => {\n\nconst matchSearch =\np.title.toLowerCase().includes(q) ||\np.description.toLowerCase().includes(q)\n\nconst matchGenre =\n!g || (p.genre ?? []).includes(g)\n\nreturn matchSearch && matchGenre\n\n})\n\nrender()\n\n}\n\nsearch.addEventListener("input", applyFilters)\ngenreFilter.addEventListener("change", applyFilters)\n\nrender()\n\n})();<\/script>'], ["", " ", " ", '<section class="max-w-7xl mx-auto px-6 py-24"> <h1 class="text-5xl font-anton mb-14" data-i18n="playlists.title"></h1> <input id="search" placeholder="Search playlists..." data-i18n-placeholder="playlists.search" class="w-full md:w-96 bg-neutral-900 px-5 py-3 rounded-xl mb-10"> <select id="genreFilter" class="bg-neutral-900 px-4 py-3 rounded-xl mb-10"> <option value="" data-i18n="playlists.genres.all"></option> </select> <div id="grid" class="grid grid-cols-2 md:grid-cols-4 gap-8"></div> </section> <script>(function(){', '\n\nconst grid = document.getElementById("grid")\nconst search = document.getElementById("search")\nconst genreFilter = document.getElementById("genreFilter")\n\nlet filtered = playlists\n\n// detectar géneros\nconst genres = [...new Set(\nplaylists.flatMap(p => p.genre ?? [])\n)]\n\ngenres.forEach(g => {\n\nconst o = document.createElement("option")\n\no.value = g\no.textContent = g\n\ngenreFilter.appendChild(o)\n\n})\n\n// render\nfunction render(){\n\ngrid.innerHTML = ""\n\nfiltered.forEach(p => {\n\nconst el = document.createElement("a")\n\nel.href = "/playlists/" + p.id\nel.className = "group"\n\nel.innerHTML = \\`\n\n<div class="aspect-square overflow-hidden rounded-xl">\n\n<img\nsrc="\\${p.image}"\nclass="w-full h-full object-cover group-hover:scale-105 transition"\n/>\n\n</div>\n\n<h2 class="font-anton mt-4">\n\\${p.title}\n</h2>\n\n<p class="text-sm opacity-60">\n\\${p.description}\n</p>\n\n\\`\n\ngrid.appendChild(el)\n\n})\n\n}\n\n// filtros\nfunction applyFilters(){\n\nconst q = search.value.toLowerCase()\nconst g = genreFilter.value\n\nfiltered = playlists.filter(p => {\n\nconst matchSearch =\np.title.toLowerCase().includes(q) ||\np.description.toLowerCase().includes(q)\n\nconst matchGenre =\n!g || (p.genre ?? []).includes(g)\n\nreturn matchSearch && matchGenre\n\n})\n\nrender()\n\n}\n\nsearch.addEventListener("input", applyFilters)\ngenreFilter.addEventListener("change", applyFilters)\n\nrender()\n\n})();<\/script>'])), renderComponent($$result, "Layout", $$Layout, {}), renderComponent($$result, "Navbar", $$Navbar, {}), maybeRenderHead(), defineScriptVars({ playlists: enriched }));
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
