import React from "react";
import "./style.css";

// This file exports both the List and ListItem components

export function Comment({ children }, props) {
  return (
    <div className={props.class} id="dropdown">
    <div className="dropdown-trigger">
                <button onClick={props.onClick} className="button" aria-haspopup="true" aria-controls="dropdown-menu">View Comments
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu" role="menu">
            <div className="dropdown-content">{children}</div>
        </div>
    </div>
  )
} 

export function CommentItem({ children }, props) {
    return (
      <div className="Comments">
        <div data-id={props.dataID}>{children}</div>
      </div>
    )
  }

 

export default Comment;