/**
 * Recent media items for the homepage "Recent" column.
 * Each item is either an image (src) or a video (video).
 *
 * For video thumbnails: place images in src/assets/recent/
 * and set `thumb` to just the filename (e.g. "my-thumb.jpg").
 */

export interface RecentItem {
  /** Internal image path for standalone images — filename in src/assets/recent/ */
  src?: string;
  /** Vimeo or YouTube URL */
  video?: string;
  /** Video thumbnail — filename in src/assets/recent/ */
  thumb?: string;
  /** Optional caption shown in the lightbox */
  caption?: string;
  /** Year for grid ordering */
  year?: number;
}

export const recentItems: RecentItem[] = [
  { video: "https://vimeo.com/1175793532", thumb: "1175793532.jpg", year: 2025 },
  { video: "https://vimeo.com/1175793377", year: 2025 },
  { video: "https://vimeo.com/1175793573", thumb: "1175793573.jpg", year: 2025 },
  { video: "https://vimeo.com/1175793350", year: 2025 },
  { video: "https://vimeo.com/1175793473", thumb: "1175793473.jpg", year: 2025 },
  { video: "https://vimeo.com/1175793325", thumb: "1175793325.jpg", year: 2025 },
  { video: "https://vimeo.com/1175793360", year: 2025 },
];
