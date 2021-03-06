// import React from "react";
import Home from "./Home";
import Registration from "../components/Registration/index";
import NoMatch from "./NoMatch"
import API from "../utils/API"
import React, {Component} from "react";
// import { Col, Row, Container } from "../components/Grid";
// import { PromiseProvider } from "mongoose";

       class UserCheck extends Component {
        state = {
            userInfo: [],
            user: this.props.userId,
            userRegistered: false
            };

        // console.log(collections)
        // this.setState({ searchRes: wasFound})
         
           componentDidMount() {
             this.checkUser();
           }
         
           checkUser = () => {
               console.log("ln 26 : ", this.state.user)
             API.getUser(this.state.user)
               .then(res => {
                console.log('ln 30 res.data: ', res)
                //  this.setState({ UserInfo: res.data })
                 if(res.data) {
                     this.setState({ userRegistered: true })
                 }
                 console.log(this.state.userRegistered)
               }
               )
               .catch(err => console.log(err));
           };

           submit() {
             console.log("clicked")
            document.getElementById("login").onclick = function () {
              window.location.href = "/main";
           }
          }
        
        

        render() {
        //   let mainComponent = this.state.UserInfo  ? <Home {...this.props}/> : <NoMatch />
          let mainComponent = this.state.userRegistered  ? <Home {...this.props}/> : <Registration onSubmit={this.submit}/>

          return (
            <div className="App">
            {/* <div>{this.state.userInfo.email}</div> */}
                {mainComponent}
            </div>
          );
        }
      };


  
  

  export default UserCheck;