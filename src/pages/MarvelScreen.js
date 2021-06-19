import React from "react";
import { HeroList } from "../components/HeroList";

export const MarvelScreen = () => {
  return (
    <section className="section">
      <h3 className="text-center py-lg-3">MarvelScreen</h3>
      <hr />

      <HeroList title="Marvel Comics" />
    </section>
  );
};
