import React from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { HeroCard } from "./HeroCard";

export const HeroList = ({ title }) => {
  const marvelData = getHeroesByPublisher(title);
  return (
    <div className="container paddingCustom ">
      <h2 className="text-center pb-4">{title}</h2>

      <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2 row-cols-lg-4 ">
        {marvelData.map((item) => (
          <HeroCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
