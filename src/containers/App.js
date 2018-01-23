import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import '../App.css';

import HomePage from '../components/home-page';
import Menu from '../components/menu'
import HeaderPanel from './header-panel';
import RegForm from './registration-form';

class App extends Component {
  render() {
    return (
      <div>
        <HeaderPanel />
        <Route exact path="/" component={HomePage} />
        <Route path="/menu" component={Menu} />
        {/* <Route path="/events" component={Events} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} /> */}
        <Route path="/registration" component={RegForm} />
      </div>
    );
  }
}

export default App;
