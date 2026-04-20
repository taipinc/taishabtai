import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.number(),
      type: z.enum(["project", "ongoing", "interactive", "other-work", "teaching-tool", "video", "text"]),
      slug: z.string().optional(),
      size: z.number().min(1).max(3).optional(),
      medium: z.string().optional(),
      hero: image().optional(),
      icon: image().optional(),
      iframe: z.string().optional(),
      summary: z.string().optional(),
      background: z.string().optional(),
      url: z.string().optional(),
      github: z.string().optional(),
      huggingface: z.string().optional(),
      videoUrl: z.string().optional(),
      thumb: z.string().optional(),
      caption: z.string().optional(),
    }),
});

export const collections = { posts };
