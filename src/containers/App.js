import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import '../App.css';

import HomePage from './home-page';
import HeaderPanel from './header-panel';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
  render() {
    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <HeaderPanel />
            <Route exact path="/" component={HomePage} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
