import React from "react";
import { HeroList } from "../components/HeroList";

export const DcScreen = () => {
  return (
    <section className="section">
      <h2 className="text-center py-lg-3">DcScreen</h2>

      <hr />

      <HeroList title="DC Comics" />
    </section>
  );
};
