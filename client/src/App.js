// import React from "react";
import React, {Component} from "react";
import './App.css';
import Brewing from "./pages/Brewing";
import Coding from "./pages/Coding";
import Skiing from "./pages/Skiing";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import UserCheck from "./pages/userCheck";
import Home from "./pages/Home";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Callback from "./pages/Callback";

// import Registration from "./components/Registration";

class App extends Component {
  render() {
    {console.log('render APP.js')}
    {console.log(this.props.location)}
    let mainComponent = "";
    switch(this.props.location) {
      case "":
        mainComponent = <Login {...this.props}/>;
        break;
        case "callback":
          mainComponent = <Callback />;
          break;
      case "home":
        mainComponent = this.props.auth.isAuthenticated() ? <UserCheck {...this.props}/> : <NoMatch />
        break;
      case "main":
        mainComponent = this.props.auth.isAuthenticated() ? <Home {...this.props}/> : <NoMatch />
        break;
      case "brewing":
        mainComponent = this.props.auth.isAuthenticated() ? <Brewing {...this.props}/> : <NoMatch />
        break;
      case "coding":
        mainComponent = this.props.auth.isAuthenticated() ? <Coding {...this.props}/> : <NoMatch />
        break;
      case "skiing":
        mainComponent = this.props.auth.isAuthenticated() ? <Skiing {...this.props}/> : <NoMatch />
        break;
      default:
        mainComponent = <NoMatch />;
    }

    return (
      <div className="App">
          {mainComponent}
       </div>
    );
  }
};

export default App; 