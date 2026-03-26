// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: "server", // 👈 IMPORTANTE
  adapter: vercel(),

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
