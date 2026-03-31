import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
export default defineConfig({
  site: "https://taipinc.github.io",
  base: "/taishabtai",
  integrations: [mdx()],
  output: "static",
  fonts: [
    // {
    //   provider: fontProviders.adobe({ id: "wcs0fkh" }),
    //   name: "Neue Haas Unica",
    //   cssVariable: "--font-body",
    //   weights: [300, 400, 600, 700],
    //   fallbacks: ["sans-serif"],
    // },
    {
      provider: fontProviders.google(),
      name: "Lora",
      cssVariable: "--font-body",
      weights: [400, 500, 600, 700],
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Archivo Narrow",
      cssVariable: "--font-heading",
      weights: [400, 500, 600, 700],
      fallbacks: ["sans-serif"],
    },
  ],
});
