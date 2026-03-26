import { e as createComponent, m as maybeRenderHead, g as addAttribute, k as renderComponent, r as renderTemplate } from './astro/server_D_1a7wqE.mjs';
import 'piccolore';
import { s as siteConfig, L as LogoLight, a as LogoDark, b as $$DarkModeToggle } from './MadNess Music Group - Logo Black_emOj480m.mjs';

const $$SlugNavbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="glass-nav w-full"> <div class="max-w-350 mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between"> <div class="flex items-center gap-4"> <a href="/" class="flex items-center gap-4 group"> <div class="logo-nav-wrap"> <img${addAttribute(LogoLight.src, "src")} alt="MadNess Music Group logo" class="logo-nav logo-nav-dark" loading="eager"> <img${addAttribute(LogoDark.src, "src")} alt="MadNess Music Group logo" class="logo-nav logo-nav-light" loading="eager"> </div> <div class="flex flex-col leading-none"> <span class="font-heading text-lg sm:text-xl tracking-tight"> ${siteConfig.siteName} </span> </div> </a> </div> <div class="flex items-center gap-3"> ${renderComponent($$result, "DarkModeToggle", $$DarkModeToggle, {})} </div> </div> </header>`;
}, "C:/Users/mikel/OneDrive/Documentos/MadNessHauz/madness-music-group-page/src/components/SlugNavbar.astro", void 0);

export { $$SlugNavbar as $ };
