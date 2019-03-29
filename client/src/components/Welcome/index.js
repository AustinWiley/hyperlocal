import React from "react";
import "./style.css";

function Welcome(props) {
  return (
      <div className="Welcome">
    <div className="welcome">
        <h2>Welcome to hyperlocal</h2>
        <p id="line"><span><i className="fas fa-ellipsis-h"></i></span>×××<i className="fas fa-ellipsis-h"></i></p>
        <h3>Find your people.</h3>
        <button className="button is-primary" onClick={props.onClick} id="login">Login</button>
        <button className="button is-danger" id="register" href="#">Register</button>
    </div>
    </div>
  );
}

export default Welcome;