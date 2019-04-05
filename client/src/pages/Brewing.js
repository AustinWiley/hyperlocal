import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./home.css";
import Nav from "../components/Nav";
import NewEvent from "../components/NewEvent";
import NewListing from "../components/NewListing";
import NewComment from "../components/NewComment";
import SkiIcon from "../components/SkiIcon";
import CodeIcon from "../components/CodeIcon";
import Post from "../components/Posts";
import PostItem from "../components/Posts";
import Comment from "../components/Comments";
import CommentItem from "../components/Comments";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import CommentModal from "../components/CommentModal";
import API from "../utils/API";

var moment = require('moment');
moment().format();

class Brewing extends Component {
  // Setting our component's initial state
  state = {
    posts: [],
    user: this.props.userId,
    activity: "Brewing",
    type: "",
    postBody: "",
    // comments: [],
    commentBody: "",
    viewCommentsClass: "dropdown",
    createCommentsClass: "dropdown",
    modal: "modal",
    commentModal: "modal",
    postID: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadBrewingPosts();
  }

  // Loads all books  and sets them to this.state.books
  loadBrewingPosts = () => {
    API.getBrewingPosts()
      .then(res =>
        console.log(res.data)
        // this.setState({ posts: res.data, postBody: "" })
        // console.log("load Brewing posts")
      )
      .catch(err => console.log(err));
      console.log(this.state);
      // this.loadBrewingComments();
  };

  // loadBrewingComments = () => {
  //   API.getBrewingComments()
  //     .then(res =>
  //       this.setState({ comments: res.data, commentBody: "" })
  //     )
  //     .catch(err => console.log(err));
  //     console.log(this.state);
  // };

  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  closeModal = event => {
    this.setState({ modal: "modal"})
  };

  closeCommentModal = event => {
    this.setState({ commentModal: "modal"})
  };

  createEvent = event => {
    this.setState({ modal: "modal is-active", type: "Event"})
  };

  createListing = event => {
    this.setState({ modal: "modal is-active", type: "Listing"})
  };

  setPostID = event => {
    const value  = event.target.id;
    console.log(value);
    this.setState({
      postID: value
    });
    this.createComment();
  }

  createComment = event => {

    this.setState({ commentModal: "modal is-active"});
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleCommentSelection = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


//functions for showing comments in drop down
// commentsDrop() {
//   this.toggleClass();
// }
 
// createCommentDrop() {
//     let myClass = this.state.createCommentsClass;
//     return myClass === "dropdown" ?
//     this.setState({createCommentsClass: "dropdown is-active"}) : this.setState({createCommentsClass: "dropdown"})
// }

 toggleClass = event => {
    // let myClass = this.state.viewCommentsClass;
    // console.log(myClass);
    // return myClass === "dropdown" ?
    this.setState({viewCommentsClass:"dropdown is-active"}) //: this.setState({viewCommentsClass: "dropdown"})
}

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handlePostSubmit = event => {
    event.preventDefault();
    this.setState({ modal: "modal"})
      API.saveBrewingPosts({
        _creator: this.state.user,
        _activity: this.state.activity,
        postType: this.state.type,
        postBody: this.state.postBody
      })
        .then(res => this.loadBrewingPosts())
        .catch(err => console.log(err))
        .then(this.closeModal())
      console.log(this.state);
  };

  handleCommentSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.setState({ modal: "modal"})
      API.saveBrewingComment({
        _creator: this.state.user,
        commentBody: this.state.commentBody,
        _post: this.state.postID
      })
        .then(res => this.loadBrewingComments())
        .catch(err => console.log(err))
        .then(this.closeCommentModal())
      console.log(this.state.user, this.state.commentBody);
  };

  render() {
    return (
      <Container>
      <Modal
          class={this.state.modal}
          type={this.state.type}
          name="postBody"
          value={this.state.postBody}
          onChange={this.handleInputChange}
          onClick={this.closeModal}
          onSubmit={this.handlePostSubmit}

      />
      <CommentModal
        class={this.state.commentModal}
        type={this.state.type}
        name="commentBody"
        value={this.state.commentBody}
        onChange={this.handleInputChange}
        onClick={this.closeCommentModal}
        onSubmit={this.handleCommentSubmit}

      />
      <Nav />
      <div className="Home">
        <Row>
          <Col size="md-12">
              {/* <h2>Welcome {props.userId}</h2> */}
            <div className="columns is-mobile">
                <div className="column is-one-quarter sidebar">
                    <h3 className="title is-3">Brewing Actions</h3>
                    <div className="images">
                        <NewEvent
                            onClick={this.createEvent}
                        />
                        <NewListing
                            onClick={this.createListing}
                        />
                    </div>
                    <div className="images">
                        <SkiIcon />
                        <CodeIcon />
                    </div>
                </div>
                <div className="column main posts">
                    <h3 className="title is-3">What’s New</h3>
                    <Post>
                      {console.log(this.state.posts)}
                      {/* {this.state.posts.map(post => {
                      return (
                        <PostItem key={post._id}>
                          <h1>
                            {post.postType} by {post._creator}
                          </h1>
                          <p>{post.postBody}</p>
                          <p>Posted On: {moment(post.date).format("MMM Do YY")}</p> */}
                            {/* <Comment
                              class={this.state.viewCommentsClass}
                              type={this.state.type}
                              name="commentBody"
                              value={this.state.commentBody}
                              onChange={this.handleInputChange}
                              onClick={this.toggleClass}
                              onSubmit={this.handleCommentSubmit}
                            >
                            {post.comments.map(comment => {
                              return (
                              <CommentItem className="dropdown-item" key={comment._id} postID={post._id}>
                                <h1>
                                Comment by {comment._creator}
                                </h1>
                                <p>{comment.commentBody}</p>
                                <p>Posted On: {moment(comment.date).format("MMM Do YY")}</p>
                                <div className="dropdown-divider"></div>
                              </CommentItem>
                              )})}
                            </Comment>
                            <NewComment
                            onClick={this.setPostID}
                            name="postID"
                            value={post._id}
                             /> */}
                        {/* </PostItem> */}
                        // )})}
                        </Post>
                    </div>
                  </div> 
                </Col>
              </Row>
            <Footer />
          </div>
        </Container>
      );
    }
  }
export default Brewing;