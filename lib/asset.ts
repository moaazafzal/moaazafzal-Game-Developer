/**
 * Prefixes a public-folder path with the deployment's basePath.
 *
 * Next applies basePath to its own asset URLs, but `images.unoptimized` makes
 * next/image emit the given src verbatim, so on GitHub Pages (served from
 * /<repo>) every image would resolve against the domain root and 404. The
 * value comes from next.config.ts and is empty in dev.
 */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  return `${BASE}${path}`;
}
