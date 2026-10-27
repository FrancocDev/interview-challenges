export default function contarDuplicados(texto: string): number {
  const textArr = texto.toLocaleLowerCase().split("");
  const set = new Set(textArr);
  const emptySet = new Set();

  textArr.forEach((letter) => {
    if (set.has(letter)) {
      set.delete(letter);
    } else {
      emptySet.add(letter);
    }
  });
  return emptySet.size;
}
