import type { Emocion } from "./types";

const emotionsOrder = new Map<Emocion, number>();
emotionsOrder.set(":D", 5);
emotionsOrder.set(":)", 4);
emotionsOrder.set(":|", 3);
emotionsOrder.set(":(", 2);
emotionsOrder.set("T_T", 1);

export default function ordenarEmociones(emociones: Emocion[], orden: boolean): Emocion[] {
  const orderedEmotions: Emocion[] = [];
  return emociones.sort((a, b) => {
    const rankA = emotionsOrder.get(a) ?? 0;
    const rankB = emotionsOrder.get(b) ?? 0;
    return orden ? rankB - rankA : rankA - rankB;
  });
}
