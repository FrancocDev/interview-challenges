export default function validarParéntesis(parentesis: string): boolean {
  if (parentesis.length % 2 !== 0) return false;

  const buffer = [];
  const chars = parentesis.split("");
  for (let char of chars) {
    if (char === "(") {
      buffer.push("(");
    }
    if (char === ")" && buffer.length === 0) return false;
    if (char === ")") buffer.pop();
  }
  return buffer.length === 0;
}
