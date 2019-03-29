// import React from "react";
import React, {Component} from "react";
import './App.css';
import API from "./utils/API";

import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import UserCheck from "./pages/userCheck";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Callback from "./pages/Callback";

class App extends Component {
  render() {
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
        console.log(this.props.auth.isAuthenticated())
        break;
      case "activities":
        mainComponent = this.props.auth.isAuthenticated() ? <Activity {...this.props}/> : <NoMatch />
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

// function App() {
//       return (
//         <Router>
//           <div>
//             <Switch>
//               <Route exact path="/" component={Login} />
//               <Route exact path="/Home" component={Home} />
//               <Route exact path="/Activity" component={Activity} />
//               <Route component={NoMatch} />
//             </Switch>
//           </div>
//         </Router>
//       );
// }
export default App; 