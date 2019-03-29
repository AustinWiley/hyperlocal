import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./home.css";
import Nav from "../components/Nav";
import NewEvent from "../components/NewEvent";
import NewListing from "../components/NewListing";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

function Activity(props) {
    return (
      <Container>
      <Nav />
      <div className="Activity"> 
        <Row>
          <Col size="md-12">
              {/* <h2>Welcome {props.userId}</h2> */}
            <div className="columns is-mobile">
                <div className="column is-one-quarter sidebar">
                    <h3 className="title is-3">Activity Actions</h3>
                    <div className="images">
                        <NewEvent/>
                        <NewListing />
                    </div>
                </div>
                <div className="column main">
                    <h3 className="title is-3">What’s New</h3>
                    <div className="posts">
                        <Posts /> 
                        <Posts />
                        <Posts /> 
                        <Posts />
                        <Posts />
                        <Posts />
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
  
  

  export default Activity;