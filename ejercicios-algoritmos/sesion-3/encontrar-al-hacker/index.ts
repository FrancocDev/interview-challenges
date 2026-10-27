import type { Estudiante } from "./types";

function getScore(letter: string): number {
  if (letter === "A") return 30;
  if (letter === "B") return 20;
  if (letter === "C") return 10;
  if (letter === "D") return 5;
  return 0;
}

export default function encontrarHackers(estudiantes: Estudiante[]): string[] {
  const hackers = [];

  estudiantes.forEach((estudiante) => {
    let totalScore = 0;
    estudiante[2].forEach((score) => (totalScore += getScore(score)));
    if (estudiante[2].length >= 5) {
      const scoreSet = new Set(estudiante[2]);
      scoreSet.delete("B");
      scoreSet.delete("A");
      if (scoreSet.size === 0) totalScore += 20;
    }
    if (totalScore !== estudiante[1]) {
      hackers.push(estudiante[0]);
    }
  });
  return hackers;
}
