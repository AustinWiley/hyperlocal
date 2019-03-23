import React from "react";
import { Col, Row, Container } from "../components/Grid";
import { PromiseProvider } from "mongoose";


function Home(props) {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            
              <h1>Home Page</h1>
              <h2>Welcome {props.userId}</h2>
              <h1>
                <span role="img" aria-label="Face With Rolling Eyes Emoji">
                  🙄
                </span>
              </h1>
            
          </Col>
        </Row>
      </Container>
    );
  }
  
  

  export default Home;