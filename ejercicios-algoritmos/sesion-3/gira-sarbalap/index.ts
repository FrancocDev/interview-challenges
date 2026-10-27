export default function girar(texto: string): string {
  const textArr = texto.split(" ");
  const returnArr: string[] = [];

  textArr.forEach((word) => {
    if (word.length < 5) {
      returnArr.push(word);
    } else {
      returnArr.push(word.split("").reverse().join(""));
    }
  });
  return returnArr.join(" ");
}
