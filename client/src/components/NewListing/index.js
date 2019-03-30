import React from "react";
import { PromiseProvider } from "mongoose";

function NewListing(props) {
    return(
    <div>
    <a onClick={props.onClick}>
        <img alt="brew" src={require("./plus.png")}></img>
        <p>Post a New Listing</p>
    </a> 
    </div>
    );
}

export default NewListing;