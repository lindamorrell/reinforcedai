/**
 * Minimal `cn()` shim from shadcn — combines class strings, dedupes tailwind collisions.
 * No clsx/tailwind-merge dependency required because we apply our own dedupe pass.
 */
export function cn(...inputs: Array<string | undefined | null | false>): string {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const input of inputs) {
    if (!input) continue;
    for (const cls of input.split(/\s+/)) {
      if (!cls) continue;
      if (seen.has(cls)) continue;
      seen.add(cls);
      out.push(cls);
    }
  }
  return out.join(" ");
}
