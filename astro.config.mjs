// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server", // 🔑 ACTIVA SSR REAL

  adapter: node({
    mode: "standalone", // recomendado
  }),

  vite: {
    plugins: [tailwindcss()],
  },

  prefetch: true,
});