export default function filtrarPares(array: unknown[]): unknown[] {
  const map = new Map<unknown, number>();
  array.forEach((element) => {
    if (map.has(element)) {
      map.set(element, map.get(element) + 1);
    } else {
      map.set(element, 1);
    }
  });
  const pares: unknown[] = [];
  map.forEach((value, key) => {
    if (value % 2 === 0) {
      pares.push(key);
    }
  });
  return pares;
}
