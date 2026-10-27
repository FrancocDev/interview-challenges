export default function posiblePalindromo(num: number): boolean {
  const set = new Set();
  num
    .toString()
    .split("")
    .forEach((num) => {
      if (set.has(num)) {
        set.delete(num);
      } else {
        set.add(num);
      }
    });
  return set.size <= 1;
}
