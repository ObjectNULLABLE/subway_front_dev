import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import '../App.css';

import HomePage from '../components/home-page';
import Menu from '../containers/menu';
import HeaderPanel from './header-panel';
import RegistrationPage from './registration-page';

class App extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column>
            <HeaderPanel buttonColor="teal" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns="1" style={{ marginTop: '5em' }}>
          <Grid.Column width="15">
            <Route exact path="/" component={HomePage} />
            <Route path="/menu" component={Menu} />
            {/* <Route path="/events" component={Events} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/about" component={About} /> */}
            <Route path="/registration" component={RegistrationPage} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default App;
