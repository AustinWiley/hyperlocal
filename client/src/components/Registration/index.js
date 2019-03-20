import React from "react";
import "./style.css";

function Registration() {
    return (
      <div className="registration">
          <h2>Registration</h2>
          <p><span><i className="fas fa-ellipsis-h"></i></span>×××<i className="fas fa-ellipsis-h"></i></p>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="email" placeholder="Username" />
                <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-star-of-life"></i>
                </span>
            </p>
        </div>
        <div className="field">
            <p className="control has-icons-left has-icons-right">
                <input className="input" type="password" placeholder="Password"/>
                <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
                </span>
                <span className="icon is-small is-right">
                <i className="fas fa-star-of-life"></i>
                </span>
            </p>
        </div>
        {/* <div className="field">
            <div className="control">
                <div className="is-primary">
                    <select className="input">
                    <option>Locale</option>
                    <option>Great Denver</option>
                    </select>
                </div>
            </div>
        </div>         */}
          <button className="button is-primary is-outlined" id="login">Submit</button>
      </div>
    );
  }
  
  export default Registration;