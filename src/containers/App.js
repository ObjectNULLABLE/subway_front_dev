import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import '../App.css';

import SubwayApp from './subway-app';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={SubwayApp} />
        </div>
      </Router>
    );
  }
}

export default App;
