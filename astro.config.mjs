// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  output: "static",

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  prefetch: true,
});
