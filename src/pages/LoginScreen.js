import React from "react";

export const LoginScreen = ({ history }) => {
  const handleLogin = () => {
    history.push("/");
  };
  return (
    <div>
      <h1>LoginScreen</h1>

      <hr />

      <button className="btn btn-primary" onClick={handleLogin}>
        Enter to project
      </button>
    </div>
  );
};
