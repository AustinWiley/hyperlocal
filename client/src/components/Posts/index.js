import React, { Component } from "react";

class Posts extends Component {
  
    state =  {
        viewCommentsClass: "dropdown",
        createCommentsClass: "dropdown"
    }

    commentsDrop() {
        this.toggleClass();
    }

    crateCommentDrop() {
        let myClass = this.state.createCommentsClass;
        return myClass === "dropdown" ?
        this.setState({createCommentsClass: "dropdown is-active"}) : this.setState({createCommentsClass: "dropdown"})
    }

    toggleClass = () => {
        let myClass = this.state.viewCommentsClass;
        console.log(myClass);
        return myClass === "dropdown" ?
        this.setState({viewCommentsClass:"dropdown is-active"}) : this.setState({viewCommentsClass: "dropdown"})
    }

        // keepItBlock() {
        //     return (
        //     this.setState({createCommentsClass: "dropdown is-active"})
        //     )
        // }

    render() {
    return (
      <div className="Posts">
          <h5 className="title is-5">New Event</h5>  
          <h6 className="title is-6">From User</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac erat at augue suscipit condimentum. Praesent id lacinia erat. Sed facilisis faucibus sem in tristique. Nulla nunc eros, vestibulum eget ornare quis, semper et ex.
          </p>
          <div className="buttons">
          <div className={this.state.createCommentsClass} onClick={() => this.crateCommentDrop()}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Click me</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu" /*onClick={() => this.keepItBlock()}*/>
                <div className="dropdown-content" id="createComments">
                    <h3>User Dnae commented:</h3>
                    <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
                </div>
            </div>
        </div>
        <div className={this.state.viewCommentsClass} onClick={() => this.commentsDrop()}>
            <div className="dropdown-trigger">
                <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Click me</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu">
                <div className="dropdown-content" id="viewComments">
                    <p>Comment test</p>
                    <p>blah blah</p>
                </div>
            </div>
        </div>
        </div>
      </div>
    );
    }
  }
  
  export default Posts;