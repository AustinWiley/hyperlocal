import React from "react";
import "./style.css";


function CommentModal(props) {
    return(
<div className={props.class}>
  <div className="modal-background"></div>
  <div className="modal-content">
  <h1>Ceate your {props.type}</h1>
  <div className="box">
    <input className="input" type="text" placeholder={props.type} value={props.value} name={props.name} onChange={props.onChange}/>
    <a className="button submitBtn" id={props.postID} name={props.name} value={props.postID} onClick={props.onSubmit}>Submit</a>
  </div>
  </div>
  <button onClick={props.onClick} className="modal-close is-large" aria-label="close"></button>
</div>
    );
}

export default CommentModal;