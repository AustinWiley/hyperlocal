import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar is-transparent is-fixed-top">
        <div className="navbar-brand">
        <a href="/home#">
        <img alt="logo" src={require("./hyperlogo.png")} className="logo"/>
        </a>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
            {/* <a className="navbar-item" href="https://bulma.io/" className="home has-text-centered">
              Home
            </a> */}
            <h1 className="home">hyperlocal</h1>
          <div className="navbar-end">
              <div className="field is-grouped">
                <p className="control">
                <a href="#">
                <img alt="logout" src={require("./Profile Icon.png")} className="logout"/>
                </a>
                </p>
              </div>
          </div>
        </div>
      </nav>
    );
  }

  export default Nav;