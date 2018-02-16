import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/auth';

import { Grid } from 'semantic-ui-react';

import RegDataForm from '../components/forms/reg-data-form';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  onSignUpClick(credentials) {
    this.props.signUpUser(credentials);
  }

  render() {
    return (
      <Grid padded centered>
        <Grid.Row>
          <Grid.Column width="5">
            <RegDataForm onSignUpClick={this.onSignUpClick} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default connect(null, { signUpUser })(RegistrationPage);
