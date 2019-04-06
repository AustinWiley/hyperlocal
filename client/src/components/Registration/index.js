import React from "react";
import "./style.css";

function Registration() {
    return (
        <div className="Registration">
      <div className="registration">
          <h2>Registration</h2>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="text" placeholder="Username" />
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-star-of-life"></i>
                </span>
            </p>
        <div className="checkboxes">
            <input type="checkbox" name="brewing" value="brewing" id="brewing"></input>
            <label htmlFor="brewing"></label>
            <input type="checkbox" name="skiing" value="skiing" id="skiing"></input>
            <label htmlFor="skiing"></label>
            <input type="checkbox" name="coding" value="coding" id="coding"></input>
            <label htmlFor="coding"></label>
        </div>    
        </div>
        <div className="field">
            <div className="control">
                <div className="is-primary" id="location">
                    <select className="input dropdown fa-select">
                    <option>Select your location</option>
                    <option>Arvada</option>
                    <option>Aurora</option>
                    <option>Centennial</option>
                    <option>Lakewood</option>
                    <option>Thornton</option>
                    <option>Westminster</option>
                    </select>
                </div>
            </div>
        </div>        
          <button className="button is-primary is-outlined" id="login">Submit</button>
      </div>
      </div>
    );
  }
  
  export default Registration;