import { dataheroes } from "../data/dataheroes";

export const getHeroesByName = (name = "") => {
  if (name === "") {
    return [];
  }

  name = name.toLocaleLowerCase();
  return dataheroes.filter((hero) =>
    hero.superhero.toLocaleLowerCase().includes(name)
  );
};
