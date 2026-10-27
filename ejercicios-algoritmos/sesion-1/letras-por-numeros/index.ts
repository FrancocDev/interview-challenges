export default function letrasPorNumeros(string: string): string {
  const normalizedLetters = string.toLocaleLowerCase().split("");
  const numbers = [];
  normalizedLetters
    .filter((val) => val !== " ")
    .forEach((val) => {
      numbers.push(val.codePointAt(0) - 96);
    });
  return numbers.join(" ");
}
