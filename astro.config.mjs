import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  fonts: [
    {
      provider: fontProviders.adobe({ id: "wcs0fkh" }),
      name: "Helvetica Neue LT Pro",
      cssVariable: "--font-body",
      weights: [300, 400, 600, 700],
    },
    {
      provider: fontProviders.local(),
      name: "Junicode Condensed",
      cssVariable: "--font-heading",
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/junicode-regularcondensed-webfont.woff2"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/junicode-boldcondensed-webfont.woff2"],
          },
        ],
      },
    },
  ],
});
