import React from "react";
import { useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  const { alter_ego, characters, first_appearance, publisher, superhero } =
    hero;

  return (
    <div className="container h-100 align-items-center d-flex ">
      <div className="row ">
        <div className="col-12 ">
          <div
            className="card mb-3 animate__animated animate__fadeInLeft"
            style={{ maxWidth: "540px" }}
          >
            <div className="row g-0">
              <div className="col-md-8">
                <img
                  src={`../assets/images/${heroId}.jpg`}
                  alt={superhero}
                  height={"500"}
                  width={"250"}
                  //   className="img-fluid"
                />
              </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h5 className="card-title">{superhero}</h5>
                  <p>{alter_ego}</p>
                  <p>{characters}</p>
                  <p>{first_appearance}</p>
                  <p>{publisher}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
