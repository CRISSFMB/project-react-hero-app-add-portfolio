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
    <div className="col mb-5">
      <div className="card animate__animated animate__fadeIn card-2">
        <img
          src={`/assets/images/${id}.jpg`}
          className="card-img-top"
          alt={superhero}
        />
        <div
          className="card-body text-center d-flex justify-content-center flex-column"
          style={{ minHeight: "150px" }}
        >
          <h5 className="card-title">{superhero}</h5>
          {alter_ego === first_apperance ? <p>{alter_ego}</p> : null}
          <p className="card-text">{publisher}</p>
          <p className="card-text">{characters}</p>
        </div>
        <Link to={`/hero/${id}`} className="btn btn-primary d-block">
          Mehr
        </Link>
      </div>
    </div>
  );
};
