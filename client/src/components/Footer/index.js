import React from "react";
import "./style.css";


function Footer() {
    return(
        <nav className="navbar is-transparent is-fixed-bottom">
        <div className="navbar-brand">
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
            <h3 className="copy">&copy;</h3>
            </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
            <h3 className="copy">&copy;</h3>
        </div>
      </nav>
    );
}

export default Footer;