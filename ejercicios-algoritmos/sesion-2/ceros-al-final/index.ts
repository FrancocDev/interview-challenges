export default function moverCeros(array: unknown[]): unknown[] {
  const data = array.filter((value) => value !== 0);
  const zeros = "0"
    .repeat(array.length - data.length)
    .split("")
    .map(Number);
  data.push(...zeros);
  return data;
}
