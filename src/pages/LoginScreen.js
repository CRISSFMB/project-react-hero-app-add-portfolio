import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.push("/");
  };
  return (
    <section className="hero d-flex justify-content-center align-items-center flex-column">
      <h1 className="text-white text-center">Willkommen beim Heldenprojekt</h1>
      <button className="btn custom-btn" onClick={handleLogin}>
        Enter to project
      </button>
    </section>
  );
};
