import type { Developer } from "./types";

export default function encontrarAlMasViejo(developers: Developer[]): Developer[] {
  const maxAge = Math.max(...developers.map((dev) => dev.age));
  return developers.filter((dev) => dev.age === maxAge);
}
