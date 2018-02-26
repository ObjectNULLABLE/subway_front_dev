import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';

class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hoursArray: [
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00',
        '24:00'
      ]
    };
  }

  render() {
    return (
      <Grid divided="vertically">
        {this.state.hoursArray.map(mappingHour => (
          <Grid.Row key={mappingHour}>
            <Grid.Column>{mappingHour}</Grid.Column>
          </Grid.Row>
        ))}
      </Grid>
    );
  }
}

export default Tracks;
