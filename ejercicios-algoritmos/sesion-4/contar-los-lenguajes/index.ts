import type { Developer } from "./types";

export default function contarLosLenguajes(developers: Developer[]): Record<string, number> {
  const map = new Map();
  developers.forEach((dev) => {
    if (!map.has(dev.language)) {
      map.set(dev.language, 0);
    }
    map.set(dev.language, map.get(dev.language) + 1);
  });
  return Object.fromEntries(map.entries());
}
