import React from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ title }) => {
  const marvelData = getHeroesByPublisher(`${title}`);
  return (
    <div className="row">
      <h2 className="text-center my-3">{title}</h2>
      <div className="col-12 d-flex justify-content-center align-items-center flex-wrap gap-4">
        {marvelData.map((item) => (
          <HeroCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
