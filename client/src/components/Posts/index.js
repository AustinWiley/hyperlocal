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
        <div>
      <div className="Posts">
          <h5 className="title is-5">New Event</h5>  
          <h6 className="title is-6">From User</h6>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ac erat at augue suscipit condimentum. Praesent id lacinia erat. Sed facilisis faucibus sem in tristique. Nulla nunc eros, vestibulum eget ornare quis, semper et ex.
          </p>
          {/* <div className="buttons">
          <div className={this.state.createCommentsClass} onClick={() => this.crateCommentDrop()}>
            <div className="dropdown-trigger">
                <button className="button commentCreateBtn is-primary" aria-haspopup="true" aria-controls="dropdown-menu3">
                    <span>Comment</span>
                    <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                    </span>
                </button>
            </div>
            <div className="dropdown-menu" id="dropdown-menu3" role="menu"/>
        //         <div className="dropdown-content" id="createComments">
        //             <h3>User Elon Musk commented:</h3>
        //             <textarea className="textarea" placeholder="e.g. Hello world"></textarea>
        //         </div>
        //     </div>
        // </div>
        // <div className={this.state.viewCommentsClass} onClick={() => this.commentsDrop()}>
        //     <div className="dropdown-trigger" onClick={() => this.showModal}>
        //         <button className="button" aria-haspopup="true" aria-controls="dropdown-menu3">
        //             <span>View</span>
        //             <span className="icon is-small">
        //                 <i className="fas fa-angle-down" aria-hidden="true"></i>
        //             </span>
        //         </button>
        //     </div>
        //     <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        //         <div className="dropdown-content" id="viewComments">
        //             <p>Comment test</p>
        //             <p>blah blah</p>
        //         </div>
        //     </div>
        // </div>
        // </div> */}

      </div>
      <div className="modal">
  <div className="modal-background"></div>
  <div className="modal-card">
    <header className="modal-card-head">
      <p className="modal-card-title">Modal title</p>
      <button className="delete" aria-label="close"></button>
    </header>
    <section className="modal-card-body">
    </section>
    <footer className="modal-card-foot">
      <button className="button is-success">Save changes</button>
      <button className="button">Cancel</button>
    </footer>
  </div>
</div>
      </div>
    );
    }
  }
  
  export default Posts;