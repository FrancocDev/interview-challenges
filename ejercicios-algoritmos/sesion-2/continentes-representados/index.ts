type Registry = {
  firstName: string;
  lastName: string;
  country: string;
  continent: string;
  age: number;
  language: string;
};

export default function continentesRepresentados(array: Registry[]): boolean {
  const continents = new Set();
  array.forEach((registry) => continents.add(registry.continent));
  return continents.size === 5;
}
