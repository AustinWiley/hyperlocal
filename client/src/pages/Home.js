import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import "./home.css";
import Nav from "../components/Nav";
import BrewIcon from "../components/BrewIcon";
import SkiIcon from "../components/SkiIcon";
import CodeIcon from "../components/CodeIcon";
import Post from "../components/Posts";
import PostItem from "../components/Posts";
import Footer from "../components/Footer";
import API from "../utils/API";

var moment = require('moment');
moment().format();

class Home extends Component {
  // Setting our component's initial state
  state = {
    posts: [],
    user: "",
    type: "",
    body: ""
  };

  // When the component mounts, load all books and save them to this.state.books
  componentDidMount() {
    this.loadPosts();
  }

  // Loads all books  and sets them to this.state.books
  loadPosts = () => {
    API.getPosts()
      .then(res =>
        this.setState({ posts: res.data, user: "", type: "", body: "" })
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

  // When the form is submitted, use the API.saveBook method to save the book data
  // Then reload books from the database
  handleFormSubmit = event => {
    event.preventDefault();
      API.savePost({
        user: this.state.user,
        type: this.state.type,
        body: this.state.body
      })
        .then(res => this.loadPosts())
        .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
      <Nav {...this.props}/>
      <div className="Home"> 
        <Row>
          <Col size="md-12">
              {/* <h2>Welcome {props.userId}</h2> */}
            <div className="columns is-mobile">
                <div className="column is-one-quarter sidebar">
                    <h3 className="title is-3">Activities</h3>
                    <div className="images">
                        <BrewIcon/>
                        <SkiIcon />
                        <CodeIcon />
                    </div>
                </div>
                <div className="column main posts">
                    <h3 className="title is-3">What’s New</h3>
                    <div>
                    <Post className="Posts">
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
export default Home;