import React from "react";

function BrewIcon() {
    return(
    <div>
    <a href="#">
        <img alt="brew" src={require("./brew.png")}></img>
        <p>Brewing</p>
    </a> 
    </div>
    );
}

export default BrewIcon;