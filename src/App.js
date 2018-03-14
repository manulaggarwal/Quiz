import React, { Component } from 'react';
import './App.css';
import {Quiz} from './Containers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Quiz></Quiz>
      </div>
    );
  }
}

export default App;
