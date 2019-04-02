import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./home.css";
import Nav from "../components/Nav";
import NewEvent from "../components/NewEvent";
import NewListing from "../components/NewListing";
import BrewIcon from "../components/BrewIcon";
import CodeIcon from "../components/CodeIcon";
import Post from "../components/Posts";
import PostItem from "../components/Posts";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import API from "../utils/API";

var moment = require('moment');
moment().format();

class Skiing extends Component {
  // Setting our component's initial state
  state = {
    posts: [],
    user: this.props.userId,
    type: "",
    activity: "Skiing",
    body: "",
    modal: "modal"
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadSkiingPosts();
  }

  // Loads all books  and sets them to this.state.books
  loadSkiingPosts = () => {
    API.getSkiingPosts()
      .then(res =>
        this.setState({ posts: res.data, type: "", body: "" })
      )
      .catch(err => console.log(err));
  };

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

  createEvent = event => {
    this.setState({ modal: "modal is-active", type: "event"})
  };

  createListing = event => {
    this.setState({ modal: "modal is-active", type: "listing"})
  };

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({ modal: "modal"})
      API.saveSkiingPost({
        user: this.state.user,
        type: this.state.type,
        body: this.state.body
      })
        .then(res => this.loadSkiingPosts())
        .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
      <Modal 
          class={this.state.modal}
          type={this.state.type}
          name="body"
          value={this.state.body}
          onChange={this.handleInputChange}
          onClick={this.closeModal}
          onSubmit={this.handleFormSubmit}
      />
      <Nav />
      <div className="Home"> 
        <Row>
          <Col size="md-12">
              {/* <h2>Welcome {props.userId}</h2> */}
            <div className="columns is-mobile">
                <div className="column is-one-quarter sidebar">
                    <h3 className="title is-3">Coding Actions</h3>
                    <div className="images">
                        <NewEvent
                          onClick={this.createEvent}
                        />
                        <NewListing
                          onClick={this.createListing}
                        />
                    </div>
                    <div className="images">
                        <BrewIcon/>
                        <CodeIcon />
                    </div>
                </div>
                <div className="column main posts">
                    <h3 className="title is-3">What’s New</h3>
                    <div className="Posts">
                    <Post>
                      {this.state.posts.map(post => {
                      return (
                        <PostItem key={post._id}>
                          <h1>
                            {post.postType} by {post._creator}
                          </h1>
                          <p>{post.postBody}</p>
                          <p>Posted On: {moment(post.date).format("MMM Do YY")}</p>
                      </PostItem>
                      )})}
                    </Post>
                    </div>
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
export default Skiing;