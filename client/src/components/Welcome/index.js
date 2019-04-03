import React from "react";
import "./style.css";

function Welcome(props) {
  return (
      <div className="Welcome">
    <div className="welcome">
        <h2>Welcome to hyperlocal</h2>
        <h3>Find your people</h3>
        <button className="button is-primary" onClick={props.onClick} id="login">Login</button>     
    </div>
    </div>
  );
}

export default Welcome;