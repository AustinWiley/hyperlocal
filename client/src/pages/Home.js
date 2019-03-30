import React from "react";
import { Col, Row, Container } from "../components/Grid";
import "./home.css";
import Nav from "../components/Nav";
import BrewIcon from "../components/BrewIcon";
import SkiIcon from "../components/SkiIcon";
import CodeIcon from "../components/CodeIcon";
import Posts from "../components/Posts";
import Footer from "../components/Footer";

function Home(props) {
    return (
      <Container>
      <Nav />
      <div className="Home"> 
        <Row>
          <Col size="md-12">
              {/* <h2>Welcome {props.userId}</h2> */}
            <div className="columns is-mobile">
                <div className="column is-one-quarter sidebar">
                    <h3 className="title is-3">My Communities</h3>
                    <div className="images">
                        <BrewIcon/>
                        <SkiIcon />
                        <CodeIcon />
                            {/* <img alt="img" src="http://images6.fanpop.com/image/photos/36600000/Spongebob-Squarepants-image-spongebob-squarepants-36622886-120-120.jpg"/> */}
                            {/* <a href="#">
                                <img alt="brew" src={require("./images/brew.png")}></img>
                            </a> */}
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
  
  

  export default Home;