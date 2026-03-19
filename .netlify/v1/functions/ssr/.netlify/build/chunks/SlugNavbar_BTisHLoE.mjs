import { c as createComponent } from './astro-component_DJxKiPnQ.mjs';
import 'piccolore';
import { m as maybeRenderHead, e as addAttribute, h as renderComponent, r as renderTemplate } from './ssr-function_BIp3FfZD.mjs';
import { s as siteConfig, L as LogoLight, l as logoDark, a as $$LangToggle, b as $$DarkModeToggle } from './MadNess Music Group - Logo Black_CJMpTH22.mjs';

const $$SlugNavbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="glass-nav w-full"> <div class="max-w-350 mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between"> <!-- LEFT --> <div class="flex items-center gap-4"> <a href="/" class="flex items-center gap-4 group"> <!-- LOGO --> <div class="logo-nav-wrap"> <img${addAttribute(LogoLight.src, "src")} alt="MadNess Music Group logo" class="logo-nav logo-nav-dark" loading="eager"> <img${addAttribute(logoDark.src, "src")} alt="MadNess Music Group logo" class="logo-nav logo-nav-light" loading="eager"> </div> <!-- TEXTO --> <div class="flex flex-col leading-none"> <span class="font-heading text-lg sm:text-xl tracking-tight"> ${siteConfig.siteName} </span> </div> </a> </div> <!-- RIGHT --> <div class="flex items-center gap-3"> ${renderComponent($$result, "LangToggle", $$LangToggle, {})} ${renderComponent($$result, "DarkModeToggle", $$DarkModeToggle, {})} </div> </div> </header>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/SlugNavbar.astro", void 0);

export { $$SlugNavbar as $ };
