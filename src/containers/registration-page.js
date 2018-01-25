import React, { Component } from 'react';
import { Segment, Grid, Step, Icon } from 'semantic-ui-react';

import RegDataForm from '../components/forms/reg-data-form';

export default class RegistrationPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstStepActive: true,
      firstStepCompleted: false,
      secondStepActive: false,
      secondStepCompleted: false,
      thridStepActive: false,
      thridStepCompleted: false
    };
    this.setState();
  }

  render() {
    return (
      <Grid.Column width="12">
        <Segment color="teal" raised>
          <Grid padded>
            <Grid.Row centered>
              <Grid.Column width="14">
                <Step.Group fluid size="tiny">
                  <Step
                    active={this.state.firstStepActive}
                    completed={this.state.firstStepCompleted}
                  >
                    <Icon name="signup" />
                    <Step.Content>
                      <Step.Title>Account info</Step.Title>
                    </Step.Content>
                  </Step>

                  <Step
                    active={this.state.secondStepActive}
                    completed={this.state.secondStepCompleted}
                  >
                    <Icon name="user outline" />
                    <Step.Content>
                      <Step.Title>Personal data</Step.Title>
                    </Step.Content>
                  </Step>

                  <Step
                    active={this.state.thridStepActive}
                    completed={this.state.thridStepCompleted}
                  >
                    <Icon name="checkmark" />
                    <Step.Content>
                      <Step.Title>Finish</Step.Title>
                    </Step.Content>
                  </Step>
                </Step.Group>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width="2" />
              <Grid.Column width="6">
                <RegDataForm />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Grid.Column>
    );
  }
}
