import React from "react";

function NewListing() {
    return(
    <div>
    <a href="#">
        <img alt="brew" src={require("./plus.png")}></img>
        <p>Post a New Listing</p>
    </a> 
    </div>
    );
}

export default NewListing;