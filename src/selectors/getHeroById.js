import { dataHeroes } from "../data/dataHeroes";

export const getHeroById = (id) => {
  return dataHeroes.find((hero) => hero.id === id);
};
