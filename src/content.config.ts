import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectSchema = ({ image }: { image: Function }) =>
  z.object({
    title: z.string(),
    year: z.number(),
    medium: z.string().optional(),
    hero: image().optional(),
    iframe: z.string().optional(),
    slug: z.string(),
  });

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: projectSchema,
});

const otherWorks = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/other-works" }),
  schema: projectSchema,
});

const interactive = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/interactive" }),
  schema: projectSchema,
});

const ongoing = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/ongoing" }),
  schema: projectSchema,
});

const teachingToolSchema = ({ image }: { image: Function }) =>
  z.object({
    title: z.string(),
    year: z.number(),
    slug: z.string(),
    hero: image().optional(),
    url: z.string().optional(),
    github: z.string().optional(),
    huggingface: z.string().optional(),
  });

const teachingTools = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/teaching-tools" }),
  schema: teachingToolSchema,
});

export const collections = {
  ongoing,
  projects,
  "other-works": otherWorks,
  interactive,
  "teaching-tools": teachingTools,
};
