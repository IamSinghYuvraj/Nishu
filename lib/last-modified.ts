import { execFileSync } from "node:child_process";
import { existsSync } from "node:fs";

// Real "last changed" dates for the sitemap, taken from git history at build
// time. A page's date is the newest commit touching any of its source files.
// When git history is unavailable the date is left out rather than faked:
// a sitemap where every page shares the build time tells Google nothing.

const cache = new Map<string, Date | undefined>();

function commitDate(file: string): Date | undefined {
  if (cache.has(file)) return cache.get(file);
  let date: Date | undefined;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cI", "--", file], {
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    date = out ? new Date(out) : undefined;
  } catch {
    date = undefined;
  }
  cache.set(file, date);
  return date;
}

/** Newest commit date across the given source files; missing files are skipped. */
export function lastModified(...files: string[]): Date | undefined {
  const dates = files
    .filter((f) => existsSync(f))
    .map(commitDate)
    .filter((d): d is Date => Boolean(d));
  if (!dates.length) return undefined;
  return new Date(Math.max(...dates.map((d) => d.getTime())));
}
