import type { Developer } from "./types";

export default function encontrarLaMedia(developers: Developer[]): number {
  const devAgeSum = developers.map((dev) => dev.age).reduce((acc, age) => acc + age, 0);
  return devAgeSum / developers.length;
}
