import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeExternalLinks from "rehype-external-links";

// MDX inserts empty <p> tags when there are blank lines between JSX elements inside a component slot.
function rehypeRemoveEmptyParagraphs() {
  return function (tree) {
    function filter(node) {
      if (!node.children) return;
      node.children = node.children.filter((child) => {
        if (child.type === "element" && child.tagName === "p") {
          const isEmpty =
            child.children.length === 0 ||
            child.children.every(
              (c) => c.type === "text" && c.value.trim() === ""
            );
          return !isEmpty;
        }
        return true;
      });
      node.children.forEach(filter);
    }
    filter(tree);
  };
}

export default defineConfig({
  site: "https://taipinc.github.io",
  base: "/taishabtai",
  integrations: [
    mdx({
      rehypePlugins: [
        [
          rehypeExternalLinks,
          { target: "_blank", rel: ["noopener", "noreferrer"] },
        ],
        rehypeRemoveEmptyParagraphs,
      ],
    }),
  ],
  output: "static",
  fonts: [
    // {
    //   provider: fontProviders.adobe({ id: "wcs0fkh" }),
    //   name: "Adobe Kis",
    //   cssVariable: "--font-serif",
    //   fallbacks: ["serif"],
    // },
    {
      provider: fontProviders.adobe({ id: "wcs0fkh" }),
      name: "Minion Pro",
      cssVariable: "--font-serif",
      fallbacks: ["serif"],
    },
    {
      provider: fontProviders.adobe({ id: "wcs0fkh" }),
      name: "Monotype Grotesque",
      cssVariable: "--font-heading",
      weights: [300, 400, 600, 700],
      fallbacks: ["sans-serif"],
    },
    {
      provider: fontProviders.adobe({ id: "wcs0fkh" }),
      name: "Monotype Grotesque Condensed",
      cssVariable: "--font-condensed",
      weights: [300, 400, 600, 700],
      fallbacks: ["sans-serif"],
    },
    // {
    //   provider: fontProviders.adobe({ id: "wcs0fkh" }),
    //   name: "Neue Haas Unica",
    //   cssVariable: "--font-heading",
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
