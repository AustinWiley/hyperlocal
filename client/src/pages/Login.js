import React from "react";
// import React, {Component} from "react";
// import { Col, Row, Container } from "../components/Grid";
import Welcome from "../components/Welcome"

function Login(props) {
   return (
    //    <Container fluid>

       <Welcome onClick={props.auth.login}/>
    //    </Container>
   )
};
  
  export default Login;