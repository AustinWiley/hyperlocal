import React from "react";

function SkiIcon() {
    return(
    <div>
    <a href="/skiing">
        <img alt="brew" src={require("./SkiIcon.png")}></img>
        <p>Skiing</p>
    </a> 
    </div>
    );
}

export default SkiIcon;