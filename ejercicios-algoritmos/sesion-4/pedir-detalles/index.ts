import type { Developer } from "./types";

export default function pedirDetalles(developers: Developer[]): Developer[] {
  return developers.flatMap((dev) => {
    const emptyProp = Object.entries(dev).find(([, value]) => value === null);
    if (!emptyProp) return [];
    return { ...dev, question: `Hi, could you please provide your ${emptyProp.at(0)}.` };
  });
}
