import React from "react";

function NewEvent() {
    return(
    <div>
    <a href="#">
        <img alt="brew" src={require("./plus.png")}></img>
        <p>Post a New Event</p>
    </a> 
    </div>
    );
}

export default NewEvent;