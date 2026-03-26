import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_C9p9GVnl.mjs';
import { manifest } from './manifest_DeDicuy1.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/archive.astro.mjs');
const _page2 = () => import('./pages/gracias.astro.mjs');
const _page3 = () => import('./pages/playlists/_id_.astro.mjs');
const _page4 = () => import('./pages/playlists.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/archive.astro", _page1],
    ["src/pages/gracias.astro", _page2],
    ["src/pages/playlists/[id].astro", _page3],
    ["src/pages/playlists.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "964edf3e-23b1-422e-9608-97a84f482d93",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
