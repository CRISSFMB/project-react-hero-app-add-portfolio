import React from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ title }) => {
  const marvelData = getHeroesByPublisher(`${title}`);
  return (
    <section className="cards p-lg-4">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-1 p-lg-4">
          {marvelData.map((item) => (
            <HeroCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};
