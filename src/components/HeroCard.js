import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_apperance,
  caracters,
}) => {
  return (
    <div className="col d-flex flex-column align-items-center ">
      <div
        className="card mb-3 animate__animated animate__fadeIn"
        style={{ width: "15rem" }}
      >
        <img
          src={`./assets/images/${id}.jpg`}
          className="card-img-top"
          alt={publisher}
        />
        <div className="card-body">
          <h5 className="card-title">{superhero}</h5>
          <p className="card-text">Some quick example text to</p>
          <Link to={`/hero/${id}`} className="btn btn-primary">
            more Details
          </Link>
        </div>
      </div>
    </div>
  );
};
