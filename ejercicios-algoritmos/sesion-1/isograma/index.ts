export default function esIsograma(string: string): boolean {
  if (string === "") return true;
  if (string.includes(" ")) return false;

  const normalized = string.toLocaleLowerCase();
  const set = new Set();

  normalized.split("").forEach((letter) => set.add(letter));

  return normalized.length === set.size;
}
