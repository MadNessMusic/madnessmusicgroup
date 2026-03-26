import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C9p9GVnl.mjs';
import { manifest } from './manifest_DlmTBttc.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/share.astro.mjs');
const _page2 = () => import('./pages/archive.astro.mjs');
const _page3 = () => import('./pages/gracias.astro.mjs');
const _page4 = () => import('./pages/playlists/_id_.astro.mjs');
const _page5 = () => import('./pages/playlists.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/share.ts", _page1],
    ["src/pages/archive.astro", _page2],
    ["src/pages/gracias.astro", _page3],
    ["src/pages/playlists/[id].astro", _page4],
    ["src/pages/playlists.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2fb9bf50-0f8b-4db1-8b5b-65789c127441",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
