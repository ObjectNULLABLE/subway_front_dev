import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';

import RegDataForm from '../components/forms/reg-data-form';

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  onSignUpClick(credentials) {}

  render() {
    return (
      <Grid.Column width="12">
        <Segment color="teal" raised>
          <Grid padded centered>
            <Grid.Row>
              <Grid.Column width="6">
                <RegDataForm onSignUpClick={this.onSignUpClick} />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    );
  }
}
