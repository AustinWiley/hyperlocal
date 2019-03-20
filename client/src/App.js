import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import API from "./utils/API";

class App extends Component {

  handleInputChange = event => {
    // Destructure the name and value properties off of event.target
    // Update the appropriate state
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  handlePostSubmit = event => {
    event.preventDefault();
    API.getPosts()
      .then(res => {
        console.log(' get post!!')
      })
      .catch(err => console.log(err))
  };
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onClick={this.handlePostSubmit}
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
