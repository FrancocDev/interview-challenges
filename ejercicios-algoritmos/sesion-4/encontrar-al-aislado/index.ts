export default function buscarAislado(numeros: number[]): number {
  const pares: number[] = [];
  const impares: number[] = [];

  numeros.forEach((num) => {
    num % 2 === 0 ? pares.push(num) : impares.push(num);
  });

  const arrToUse = pares.length === 1 ? pares : impares;
  return arrToUse.at(0);
}
