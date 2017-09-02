import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          <a href="/auth/google">Login with Google</a> 
          <br/>
          <a href="/auth/facebook">Login with Facebook</a> 
        </p>
      </div>
    );
  }
}

export default App;
