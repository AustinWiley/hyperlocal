import React from "react";
import "./style.css";

function Interests() {
    return (
        <div className="interests">
            <h2>Find your Community</h2>
            <input type="checkbox" name="brewing" value="brewing" id="brewing"></input>
            <label htmlFor="brewing"></label>
            <input type="checkbox" name="skiing" value="skiing" id="skiing"></input>
            <label htmlFor="skiing"></label>
            <input type="checkbox" name="coding" value="coding" id="coding"></input>
            <label htmlFor="coding"></label>
        </div>
    )
}

export default Interests;