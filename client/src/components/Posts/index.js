import React from "react";

// This file exports both the List and ListItem components

export function Post({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  )
}

export function PostItem({ children }) {
  return (
    <div className="Posts">
      <li className="title is-5">{children}</li>
    </div>
  )
}


export default Post;
