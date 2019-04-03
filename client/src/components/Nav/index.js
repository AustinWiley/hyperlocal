import React, { Component } from "react";
import "./style.css";

class Nav extends Component {


    state =  {
            main_div_class: "field is-grouped dropdown",
            dropId: "navbarBasicExample",
            notActive: "navbar-menu"
        }

        logoutDrop() {
            this.toggleClass();
        }

        toggleClass = () => {
            let myClass = this.state.main_div_class;
            console.log(myClass);
            return myClass === "field is-grouped dropdown" ? 
            this.setState({main_div_class: "field is-grouped dropdown is-active"}) : this.setState({main_div_class: "field is-grouped dropdown"})
        }

        resDropdown() {
            this.dropActive();
            this.togleDropClass();
        }

        dropActive = () => {
            let myId = this.state.dropId;
            console.log(myId);
            return myId === "navbarBasicExample" ?
            this.setState({dropId: "DropActive"}) : this.setState({dropId: "navbarBasicExample"})
        }

        togleDropClass = () => {
            let myClass = this.state.notActive;
            return myClass === "navbar-menu" ?
            this.setState({notActive: "navbar-menu is-active"}) : this.setState({notActive: "navbar-menu"})
        }

    render () {
    return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
            <a href="/home#">
                <img alt="logo" src={require("./hyperlogo.png")} className="logo"/>
            </a>

            <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"
                onClick={() => this.resDropdown()}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div id={this.state.dropId} className={this.state.notActive}>
            <div className="navbar-start">
                <a className="navbar-item">
                    <h1>hyperlocal</h1>
                </a>
            </div>

    <div className="navbar-end">
    <div className={this.state.main_div_class} onClick={() => this.logoutDrop()}>
        <p className="control">
            <button className="logout">
                <img alt="logout" src={require("./Profile Icon.png")} className="logout"/>
            </button>
        </p>
    <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
            <ul>
                <li>
                    <i className="fas fa-cogs"></i>
                    <a href="#">Profile</a>
                </li>
                <li>
                    <i className="fas fa-sign-out-alt"></i>
                    <a href="#">Logout</a>
                </li>
            </ul>
     
        </div>
    </div>
    </div>
    </div>
  </div>
</nav>
    );
        }
  }

  export default Nav;