import React from "react";

import './App.css';

import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


  
function App() {
      return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Activity" component={Activity} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      );
   
    
    
}
export default App; 