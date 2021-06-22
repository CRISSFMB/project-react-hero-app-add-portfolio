import { dataHeroes } from "../data/dataHeroes";

export const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();
  return dataHeroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
