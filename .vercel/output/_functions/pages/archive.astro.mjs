import { e as createComponent, k as renderComponent, r as renderTemplate, l as defineScriptVars, m as maybeRenderHead } from '../chunks/astro/server_D_1a7wqE.mjs';
import 'piccolore';
import { r as releases } from '../chunks/releases_CbbvC55m.mjs';
import { g as getSpotifyAlbum } from '../chunks/spotify_DTBALYMn.mjs';
import { $ as $$Layout } from '../chunks/MadNess Music Group - Logo Black_emOj480m.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_Dsc2b1-B.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Archive = createComponent(async ($$result, $$props, $$slots) => {
  function detectReleaseType(albumType, tracks) {
    if (albumType === "album") return "Album";
    if (tracks && tracks >= 2 && tracks <= 6) return "EP";
    return "Single";
  }
  const allReleases = (await Promise.all(
    releases.map(async (item) => {
      try {
        const album = await getSpotifyAlbum(item.spotifyAlbumId);
        const year = album.releaseDate ? new Date(album.releaseDate).getFullYear() : 0;
        return {
          id: album.id,
          title: album.title || "Sin titulo",
          artist: album.artist || "Artista no disponible",
          image: album.image || item.cover || "/images/releases/coming-soon.png",
          url: album.url || "#",
          type: detectReleaseType(album.type, album.tracks?.length),
          releaseDate: album.releaseDate || "",
          year,
          tracks: album.tracks.map((track) => ({
            id: track.id,
            title: track.title
          }))
        };
      } catch (error) {
        console.error("Spotify album fallback:", item.spotifyAlbumId, error);
        return {
          id: item.id,
          title: item.id,
          artist: "Artista no disponible",
          image: item.cover || "/images/releases/coming-soon.png",
          url: "#",
          type: "Single",
          releaseDate: "",
          year: 0,
          tracks: []
        };
      }
    })
  )).sort(
    (a, b) => new Date(b.releaseDate || 0).getTime() - new Date(a.releaseDate || 0).getTime()
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", '<section class="max-w-7xl mx-auto px-6 py-24"> <h1 class="font-anton text-6xl mb-16">\nArchivo\n</h1> <div class="flex flex-wrap items-center gap-6 mb-14 w-full"> <input id="searchInput" placeholder="Buscar artista, cancion o lanzamiento..." class="flex-2 min-w-70 bg-neutral-900 px-4 py-3 rounded-xl outline-none"> <select id="yearFilter" class="bg-neutral-900 px-4 py-3 rounded-xl"> <option value="">Todos los anos</option> </select> <select id="typeFilter" class="bg-neutral-900 px-4 py-3 rounded-xl"> <option value="">Todos los tipos</option> <option value="Single">Single</option> <option value="EP">EP</option> <option value="Album">Album</option> </select> </div> <div id="releaseGrid" class="grid grid-cols-2 md:grid-cols-4 gap-10"></div> <p id="noResults" class="opacity-50 mt-10 hidden text-lg font-medium">\nSin resultados\n</p> <div class="flex items-center justify-center gap-4 mt-20"> <button id="prevPage" class="px-4 py-2 border border-neutral-700">\n\u2190 Anterior\n</button> <span id="pageIndicator"></span> <button id="nextPage" class="px-4 py-2 border border-neutral-700">\nSiguiente \u2192\n</button> </div> </section> <script>(function(){', '\n    const releasesData = allReleases;\n\n    const grid = document.getElementById("releaseGrid");\n    const noResults = document.getElementById("noResults");\n    const searchInput = document.getElementById("searchInput");\n    const yearFilter = document.getElementById("yearFilter");\n    const typeFilter = document.getElementById("typeFilter");\n    const prevBtn = document.getElementById("prevPage");\n    const nextBtn = document.getElementById("nextPage");\n    const pageIndicator = document.getElementById("pageIndicator");\n\n    let filtered = [...releasesData];\n    let page = 1;\n    const perPage = 12;\n\n    const years = [...new Set(releasesData.map((r) => r.year).filter(Boolean))].sort(\n      (a, b) => b - a,\n    );\n\n    years.forEach((year) => {\n      const option = document.createElement("option");\n      option.value = String(year);\n      option.textContent = String(year);\n      yearFilter.appendChild(option);\n    });\n\n    function applyFilters() {\n      const query = searchInput.value.toLowerCase();\n      const year = yearFilter.value;\n      const type = typeFilter.value;\n\n      filtered = releasesData.filter((release) => {\n        const trackMatch = release.tracks.some((track) =>\n          track.title.toLowerCase().includes(query),\n        );\n\n        const matchSearch =\n          release.title.toLowerCase().includes(query) ||\n          release.artist.toLowerCase().includes(query) ||\n          trackMatch;\n\n        const matchYear = !year || String(release.year) === year;\n        const matchType = !type || release.type === type;\n\n        return matchSearch && matchYear && matchType;\n      });\n\n      page = 1;\n      render();\n    }\n\n    function render() {\n      grid.innerHTML = "";\n\n      const start = (page - 1) * perPage;\n      const end = start + perPage;\n      const pageItems = filtered.slice(start, end);\n      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));\n\n      noResults.classList.toggle("hidden", filtered.length > 0);\n\n      pageItems.forEach((release) => {\n        const el = document.createElement("div");\n\n        el.innerHTML = `\n          <a href="${release.url}" target="_blank" rel="noopener noreferrer">\n            <img src="${release.image}" class="w-full aspect-square object-cover rounded-xl"/>\n            <p class="mt-2 font-bold">${release.title}</p>\n            <p class="text-sm opacity-60">${release.artist}</p>\n          </a>\n        `;\n\n        grid.appendChild(el);\n      });\n\n      pageIndicator.textContent = `${page} / ${totalPages}`;\n      prevBtn.disabled = page <= 1;\n      nextBtn.disabled = page >= totalPages;\n    }\n\n    searchInput.addEventListener("input", applyFilters);\n    yearFilter.addEventListener("change", applyFilters);\n    typeFilter.addEventListener("change", applyFilters);\n\n    prevBtn.onclick = () => {\n      if (page > 1) {\n        page--;\n        render();\n      }\n    };\n\n    nextBtn.onclick = () => {\n      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));\n      if (page < totalPages) {\n        page++;\n        render();\n      }\n    };\n\n    render();\n  })();<\/script> '], [" ", " ", '<section class="max-w-7xl mx-auto px-6 py-24"> <h1 class="font-anton text-6xl mb-16">\nArchivo\n</h1> <div class="flex flex-wrap items-center gap-6 mb-14 w-full"> <input id="searchInput" placeholder="Buscar artista, cancion o lanzamiento..." class="flex-2 min-w-70 bg-neutral-900 px-4 py-3 rounded-xl outline-none"> <select id="yearFilter" class="bg-neutral-900 px-4 py-3 rounded-xl"> <option value="">Todos los anos</option> </select> <select id="typeFilter" class="bg-neutral-900 px-4 py-3 rounded-xl"> <option value="">Todos los tipos</option> <option value="Single">Single</option> <option value="EP">EP</option> <option value="Album">Album</option> </select> </div> <div id="releaseGrid" class="grid grid-cols-2 md:grid-cols-4 gap-10"></div> <p id="noResults" class="opacity-50 mt-10 hidden text-lg font-medium">\nSin resultados\n</p> <div class="flex items-center justify-center gap-4 mt-20"> <button id="prevPage" class="px-4 py-2 border border-neutral-700">\n\u2190 Anterior\n</button> <span id="pageIndicator"></span> <button id="nextPage" class="px-4 py-2 border border-neutral-700">\nSiguiente \u2192\n</button> </div> </section> <script>(function(){', '\n    const releasesData = allReleases;\n\n    const grid = document.getElementById("releaseGrid");\n    const noResults = document.getElementById("noResults");\n    const searchInput = document.getElementById("searchInput");\n    const yearFilter = document.getElementById("yearFilter");\n    const typeFilter = document.getElementById("typeFilter");\n    const prevBtn = document.getElementById("prevPage");\n    const nextBtn = document.getElementById("nextPage");\n    const pageIndicator = document.getElementById("pageIndicator");\n\n    let filtered = [...releasesData];\n    let page = 1;\n    const perPage = 12;\n\n    const years = [...new Set(releasesData.map((r) => r.year).filter(Boolean))].sort(\n      (a, b) => b - a,\n    );\n\n    years.forEach((year) => {\n      const option = document.createElement("option");\n      option.value = String(year);\n      option.textContent = String(year);\n      yearFilter.appendChild(option);\n    });\n\n    function applyFilters() {\n      const query = searchInput.value.toLowerCase();\n      const year = yearFilter.value;\n      const type = typeFilter.value;\n\n      filtered = releasesData.filter((release) => {\n        const trackMatch = release.tracks.some((track) =>\n          track.title.toLowerCase().includes(query),\n        );\n\n        const matchSearch =\n          release.title.toLowerCase().includes(query) ||\n          release.artist.toLowerCase().includes(query) ||\n          trackMatch;\n\n        const matchYear = !year || String(release.year) === year;\n        const matchType = !type || release.type === type;\n\n        return matchSearch && matchYear && matchType;\n      });\n\n      page = 1;\n      render();\n    }\n\n    function render() {\n      grid.innerHTML = "";\n\n      const start = (page - 1) * perPage;\n      const end = start + perPage;\n      const pageItems = filtered.slice(start, end);\n      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));\n\n      noResults.classList.toggle("hidden", filtered.length > 0);\n\n      pageItems.forEach((release) => {\n        const el = document.createElement("div");\n\n        el.innerHTML = \\`\n          <a href="\\${release.url}" target="_blank" rel="noopener noreferrer">\n            <img src="\\${release.image}" class="w-full aspect-square object-cover rounded-xl"/>\n            <p class="mt-2 font-bold">\\${release.title}</p>\n            <p class="text-sm opacity-60">\\${release.artist}</p>\n          </a>\n        \\`;\n\n        grid.appendChild(el);\n      });\n\n      pageIndicator.textContent = \\`\\${page} / \\${totalPages}\\`;\n      prevBtn.disabled = page <= 1;\n      nextBtn.disabled = page >= totalPages;\n    }\n\n    searchInput.addEventListener("input", applyFilters);\n    yearFilter.addEventListener("change", applyFilters);\n    typeFilter.addEventListener("change", applyFilters);\n\n    prevBtn.onclick = () => {\n      if (page > 1) {\n        page--;\n        render();\n      }\n    };\n\n    nextBtn.onclick = () => {\n      const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));\n      if (page < totalPages) {\n        page++;\n        render();\n      }\n    };\n\n    render();\n  })();<\/script> '])), renderComponent($$result2, "Navbar", $$Navbar, {}), maybeRenderHead(), defineScriptVars({ allReleases })) })}`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/archive.astro", void 0);

const $$file = "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/archive.astro";
const $$url = "/archive";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Archive,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
