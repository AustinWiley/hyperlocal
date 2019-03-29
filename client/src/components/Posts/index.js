import React from "react";

function Posts() {
    return (
      <div className="Posts">
          <h5 className="title is-5">New Event</h5>  
          <h6 className="title is-6">From User</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac erat at augue suscipit condimentum. Praesent id lacinia erat. Sed facilisis faucibus sem in tristique. Nulla nunc eros, vestibulum eget ornare quis, semper et ex.
          </p>
          <div className="dropdown ">
  <div className="dropdown-trigger">
    <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
      <span>Comment</span>
      <span className="icon is-small">
        <i className="fas fa-angle-down" aria-hidden="true"></i>
      </span>
    </button>
  </div>
  <div className="dropdown-menu" id="dropdown-menu3" role="menu">
    <div className="dropdown-content">
      <a href="#" className="dropdown-item">
        Overview
      </a>
      <a href="#" className="dropdown-item">
        Modifiers
      </a>
      <a href="#" className="dropdown-item">
        Grid
      </a>
      <a href="#" className="dropdown-item">
        Form
      </a>
      <a href="#" className="dropdown-item">
        Elements
      </a>
      <a href="#" className="dropdown-item">
        Components
      </a>
      <a href="#" className="dropdown-item">
        Layout
      </a>
      <hr className="dropdown-divider"/>
      <a href="#" className="dropdown-item">
        More
      </a>
    </div>
  </div>
</div>
      </div>
    );
  }
  
  export default Posts;