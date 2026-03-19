import { c as createComponent } from './astro-component_D_dNVjRF.mjs';
import 'piccolore';
import { h as renderComponent, m as maybeRenderHead, r as renderTemplate } from './ssr-function_DryQiteE.mjs';
import { $ as $$Layout } from './MadNess Music Group - Logo Black_QkEYe3Ri.mjs';
import { $ as $$SlugNavbar } from './SlugNavbar_D-MMeBb6.mjs';

const $$Gracias = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SlugNavbar", $$SlugNavbar, {})} ${maybeRenderHead()}<section class="min-h-screen flex items-center justify-center text-center px-6"> <div class="max-w-xl"> <h1 class="font-heading text-5xl md:text-6xl mb-6" data-i18n="thanks.title">
Mensaje enviado
</h1> <p class="opacity-70 mb-10 leading-relaxed" data-i18n="thanks.text">
Gracias por escribirnos.
      Hemos recibido tu mensaje y te responderemos pronto.
</p> <a href="/" class="btn-tactical inline-flex items-center gap-2" data-i18n="thanks.cta">
Regresar al sitio
</a> </div> </section> ${renderComponent($$result, "Layout", $$Layout, {})}`;
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
