export default function encontrarImpar(numeros: number[]): number {
  const numberSet = new Set<number>();
  numeros.forEach((num) => {
    if (numberSet.has(num)) {
      numberSet.delete(num);
    } else {
      numberSet.add(num);
    }
  });
  return numberSet.values().toArray().at(0);
}
