import React from "react";

function NewEvent(props) {
    return(
    <div>
    <a onClick={props.onClick} >
        <img alt="brew" src={require("./plus.png")}></img>
        <p>Post a New Event</p>
    </a> 
    </div>
    );
}

export default NewEvent;