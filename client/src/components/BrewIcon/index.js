import React from "react";

function BrewIcon() {
    return(
    <div>
    <a href="/brewing">
        <img alt="brew" src={require("./BrewIcon.png")}></img>
        <p>Brewing</p>
    </a> 
    </div>
    );
}

export default BrewIcon;