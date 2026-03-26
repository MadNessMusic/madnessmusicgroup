import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D_1a7wqE.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/MadNess Music Group - Logo Black_emOj480m.mjs';
import { $ as $$SlugNavbar } from '../chunks/SlugNavbar_CIxnZFj_.mjs';
import { $ as $$Footer } from '../chunks/Footer_CCR7st14.mjs';
export { renderers } from '../renderers.mjs';

const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gracias" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SlugNavbar", $$SlugNavbar, {})} ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center text-center px-6"> <div class="max-w-xl"> <h1 class="font-heading text-5xl md:text-6xl mb-6">
Mensaje enviado
</h1> <p class="opacity-70 mb-10 leading-relaxed">
Gracias por escribirnos. Hemos recibido tu mensaje y te responderemos
        pronto.
</p> <a href="/" class="btn-tactical inline-flex items-center gap-2">
Regresar al sitio
</a> </div> </section> ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/gracias.astro", void 0);

const $$file = "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/pages/gracias.astro";
const $$url = "/gracias";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gracias,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
