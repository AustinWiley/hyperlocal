import React, { Component } from "react";
import "./style.css";
import Nav from "../Nav";

export default class Home extends Component {
    render() {
    return (
            <div className="Home">
                <Nav />
                <h1>HEYYYYYYYYYYYYYYYYYYYYYYYYYY</h1>
                <div className="columns is-mobile">
                    <div className="column is-one-quarter sidebar">
                        <h3 className="title is-3">My Communities</h3>
                        <div className="images">
                            <img alt="img" src="#"/>
                        </div>
                    </div>
                    <div className="column main">
                        <p className="bd-notification is-info">Second nested column</p>
                    </div>
                </div>
            </div>     
    )
    }
}
