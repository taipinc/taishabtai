# Shabtai Pinchevsky Portfolio

Artist portfolio site built with Astro + MDX, static output for GitHub Pages.

## Tech Stack
- Astro 6 with MDX integration
- Plain CSS (no frameworks) — styles split across `src/styles/global.css` and `src/styles/grid-layout.css`
- CSS custom properties for design system (colors, spacing, typography)
- Fonts: Neue Haas Unica (body) and New Spirit Condensed (headings) via Adobe Fonts
- Root font-size scales with viewport: `clamp(16px, 1.2vw, 22px)`
- Astro View Transitions (`ClientRouter`) for SPA-like navigation

## Deployment
- GitHub Pages via GitHub Actions (`.github/workflows/deploy.yml`)
- Deploys on push to `main`
- Base path: `/taishabtai` (for `taipinc.github.io/taishabtai`)
- All internal links use `${base}/` prefix from `import.meta.env.BASE_URL`
- When switching to custom domain: remove `base` from `astro.config.mjs` and update `site`

## Project Structure
- `src/content/` — MDX content collections: `ongoing/`, `projects/`, `interactive/`, `other-works/`, `teaching-tools/`
- `src/content.config.ts` — collection schemas (projectSchema + teachingToolSchema)
- `src/layouts/GridContentLayout.astro` — main layout: persistent sidebar nav + content panel with view transitions
- `src/layouts/BaseLayout.astro` — legacy two-panel layout (40% sidebar / 60% content)
- `src/layouts/GridLayout.astro` — standalone grid layout (unused, kept for reference)
- `src/components/VideoEmbed.astro` — Vimeo/YouTube embed from URL
- `src/components/TwoColumn.astro` — two-column flex layout
- `src/components/Figure.astro` — figure with aspect ratio for galleries
- `src/components/index.ts` — barrel export for MDX imports
- `src/data/recent.ts` — recent media items (videos/images) for homepage Recent column
- `src/assets/recent/` — thumbnail images for recent media
- `src/pages/index.astro` — homepage with 4-column grid (Other Works, Interactive/Teaching Tools, Recent)
- `src/pages/[slug].astro` — individual content pages with project header and close button
- `src/pages/artist-statement.astro` — artist statement page

## Homepage Grid Layout
The homepage uses a 2-column independently-scrolling grid:
- **content-nav**: Navigation `transition:persist`
- **home-content**: Grid of works

## Image Treatment
- Homepage thumbnails use B&W filter (`grayscale(1) brightness(80%) contrast(110%)`) with a color tint overlay (`.img-tint` wrapper + `::after` pseudo-element with `mix-blend-mode: color`)
- On hover: filters and tint removed, showing full color
- Active sidebar links also bypass filters/tint

## Lightbox
- Unified lightbox in `GridContentLayout.astro` handles both:
  - `.recent-media` clicks (homepage Recent column — images and video embeds)
  - `.project-content figure` clicks (content page images with gallery caption support)
- Lightbox covers only the content panel area (sidebar remains visible)
- Supports keyboard navigation (arrows, Escape) and prev/next buttons

## Content Conventions
- Each MDX file has frontmatter: `title`, `year`, `slug` (required); `medium`, `hero`, `iframe` (optional)
- Teaching tools also have `url`, `github`, `huggingface` fields — they are external links, not content pages
- Slugs must be unique within each collection
- MDX components are imported via: `import { VideoEmbed, TwoColumn } from '../../components';`
- Inside `<TwoColumn>`, use `<div>` not `<p>` to avoid MDX double-wrapping

## Styling
- Two CSS files: `src/styles/global.css` (base styles, lightbox) and `src/styles/grid-layout.css` (grid layout, columns, image tint, content pages)
- No `<style>` blocks in components
- No Tailwind, no CSS frameworks
- Key CSS variables: `--header-h: 4rem`, `--space-panel: 0.5rem`, `--space-md: 1rem`

## Commands
- `npm run dev` — dev server
- `npm run build` — static build to `dist/`
- `npm run preview` — preview built site
