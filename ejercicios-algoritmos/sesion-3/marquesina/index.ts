export default function marquesina(texto: string): string[] {
  const marquesina: string[] = [];

  for (let i = 0; i < texto.length; i++) {
    console.log(texto.slice(i + 1, texto.length).concat(texto.slice(0, i + 1)));
  }
  return marquesina;
}
