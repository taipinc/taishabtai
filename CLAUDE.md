# Shabtai Pinchevsky Portfolio

Artist portfolio site built with Astro + MDX, static output for GitHub Pages.

## Tech Stack
- Astro 5 with MDX integration
- Plain CSS (no frameworks) — all styles in `src/styles/global.css`
- CSS custom properties for design system (colors, spacing, typography)
- Font: Standard (body + headings) via self-hosted webfonts in `public/webfonts/`
- Root font-size scales with viewport height: `clamp(14px, 2.2vh, 24px)`

## Project Structure
- `src/content/` — MDX content collections: `ongoing/`, `projects/`, `interactive/`, `other-works/`, `teaching-tools/`
- `src/content.config.ts` — collection schemas (projectSchema + teachingToolSchema)
- `src/layouts/BaseLayout.astro` — two-panel layout (40% sidebar / 60% content)
- `src/components/Sidebar.astro` — nav generated from all collections
- `src/components/VideoEmbed.astro` — Vimeo/YouTube embed from URL
- `src/components/TwoColumn.astro` — two-column flex layout
- `src/components/index.ts` — barrel export for MDX imports
- `src/pages/index.astro` — homepage with hero image and about text
- `src/pages/[slug].astro` — individual content pages at flat URLs (e.g. `/anti-mapping`)

## Content Conventions
- Each MDX file has frontmatter: `title`, `year`, `slug` (required); `medium`, `hero` (optional)
- Teaching tools also have `url` and `github` fields — they are external links, not content pages
- Slugs must be unique within each collection
- MDX components are imported via: `import { VideoEmbed, TwoColumn } from '../../components';`
- Inside `<TwoColumn>`, use `<div>` not `<p>` to avoid MDX double-wrapping

## Styling
- Single CSS file: `src/styles/global.css` — no `<style>` blocks in components
- No Tailwind, no CSS frameworks

## Commands
- `npm run dev` — dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — preview built site
