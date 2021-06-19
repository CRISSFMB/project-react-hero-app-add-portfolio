import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.push("/");
  };
  return (
    <section className="hero d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-white text-center animate__animated animate__fadeInLeft display-2">
        Willkommen beim Heldenprojekt
      </h1>

      <div
        className="wrapper animate__animated animate__bounce"
        onClick={handleLogin}
      >
        <div className="inner">
          <span></span>
        </div>
      </div>
    </section>
  );
};
