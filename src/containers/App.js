import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Grid, Segment } from "semantic-ui-react";

import "../App.css";

import HomePage from "../components/home-page";
import Menu from "../containers/menu";
import HeaderPanel from "./header-panel";
import RegistrationPage from "./registration-page";
import Cart from "./cart";
import UserProfile from "./user-profile";
import Traks from "./tracks";

import back from "../IMG_3223.jpg";

const backgroundStyle = {
  background: `url(${back}) center top no-repeat`,
  backgroundAttachment: "fixed",
  backgroundSize: "cover"
};

export default class App extends Component {
  render() {
    return (
      <Grid centered style={backgroundStyle}>
        <Grid.Row>
          <Grid.Column>
            <HeaderPanel buttonColor="teal" />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width="15">
            <Segment
              color="teal"
              style={{
                minHeight: "50em",
                background: "rgba(255, 255, 255, 0.95)"
              }}
            >
              <Route exact path="/" component={HomePage} />
              <Route path="/menu" component={Menu} />
              <Route path="/cart" component={Cart} />
              <Route path="/tracks" component={Traks} />
              {/* <Route path="/events" component={Events} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/about" component={About} /> */}
              <Route path="/registration" component={RegistrationPage} />
              <Route path="/current" component={UserProfile} />
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}
