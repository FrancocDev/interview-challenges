type Input = {
  nombres: string[];
  edades: number[];
};

type Output = {
  id: number;
  nombre: string;
  edad: number;
};

export default function transformador(input: Input): Output[] {
  const output: Output[] = [];

  input.nombres.forEach((value, index) => {
    output.push({
      id: index + 1,
      nombre: value,
      edad: input.edades[index],
    });
  });
  return output;
}
