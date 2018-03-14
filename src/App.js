import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import {Quiz} from './Containers';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route 
            path="/"
            component={Quiz}
          >
          </Route>
          <Route 
            path="/:number"
            component={Quiz}
          >
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
