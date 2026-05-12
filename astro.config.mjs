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
    //   name: "Georgia",
    //   cssVariable: "--font-serif",
    //   fallbacks: ["serif"],
    // },
    {
      provider: fontProviders.adobe({ id: "wcs0fkh" }),
      name: "Minion Pro",
      cssVariable: "--font-serif",
      fallbacks: ["serif"],
    },
    // {
    //   provider: fontProviders.adobe({ id: "wcs0fkh" }),
    //   name: "Neue Haas Unica",
    //   cssVariable: "--font-body",
    //   weights: [300, 400, 600, 700],
    //   fallbacks: ["sans-serif"],
    // },
    // {
    //   provider: fontProviders.adobe({ id: "wcs0fkh" }),
    //   name: "Neue Haas Unica",
    //   cssVariable: "--font-heading",
    //   weights: [300, 400, 600, 700],
    //   fallbacks: ["sans-serif"],
    // },
  ],
});
