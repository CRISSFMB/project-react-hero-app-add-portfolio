import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_apperance,
  characters,
}) => {
  return (
    <div className="col d-flex flex-column align-items-center ">
      <div
        className="mb-3 animate__animated animate__fadeIn"
        style={{ width: "12rem", height: "32rem" }}
      >
        <div className="height-custom-img">
          <img
            src={`./assets/images/${id}.jpg`}
            className="card-img-top"
            alt={superhero}
          />
        </div>
        <div>
          <h5>{superhero}</h5>
          {alter_ego === first_apperance ? <p>{alter_ego}</p> : null}

          <p>{publisher}</p>
          <p>{characters}</p>

          <Link to={`/hero/${id}`} className="btn btn-primary d-block">
            Mehr
          </Link>
        </div>
      </div>
    </div>
  );
};
