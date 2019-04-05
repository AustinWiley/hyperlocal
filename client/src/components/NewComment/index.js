import React from "react";
import { PromiseProvider } from "mongoose";
import "./style.css";

function NewComment(props) {
    return(
    <div id="new-comment">
    <a onClick={props.onClick} id={props.postID} name={props.name} value={props.value}>
        <img alt="brew" src={require("./plus.png")} ></img>
        <p id={props.value} name={props.name} value={props.value}>Post a New Comment</p>
    </a> 
    </div>
    );
}

export default NewComment;