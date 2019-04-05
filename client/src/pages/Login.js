import React, {Component} from "react";
// import React, {Component} from "react";
// import { Col, Row, Container } from "../components/Grid";
import Welcome from "../components/Welcome"

export default class Login extends Component {
    state = {
        UserInfo: [],
         user: this.props.name
       };
     
    render() {
      return (
         //    <Container fluid>
            <Welcome onClick={this.props.auth.login}/>
         //    </Container>
        )
    }
}