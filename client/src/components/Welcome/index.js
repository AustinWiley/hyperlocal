import React from "react";
import "./style.css";

function Welcome() {
  return (
    <div className="welcome">
        <h2>Welcome to hyperlocal</h2>
        <p id="line"><span><i className="fas fa-ellipsis-h"></i></span>×××<i className="fas fa-ellipsis-h"></i></p>
        <h3>Find your people.</h3>
        <button className="button is-primary" id="login">Login</button>
        <button className="button is-danger" id="register">Register</button>
    </div>
  );
}

export default Welcome;