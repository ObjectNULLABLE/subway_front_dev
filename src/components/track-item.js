import React, { Component } from 'react';
import { Grid, Header, Button, Segment } from 'semantic-ui-react';
import SessionButton from '../components/session-button';

class TrackItem extends Component {
  constructor(props) {
    super(props);
    this.onOccupyClick = this.onOccupyClick.bind(this);
    this.onReleaseClick = this.onReleaseClick.bind(this);
  }

  onOccupyClick = sessionTime => {
    this.props.onOccupyClick(sessionTime, this.props.trackData.trackId);
  };

  onReleaseClick = sessionTime => {
    this.props.onReleaseClick(sessionTime, this.props.trackData.trackId);
  };

  render() {
    return (
      <Grid.Column width={4}>
        <Segment raised>
          <Header
            textAlign="center"
            content={'track ' + this.props.trackData.trackId}
          />
          <Button.Group vertical fluid size="small">
            {this.props.trackData.times.map(mappingSession => (
              <SessionButton
                key={mappingSession.time}
                orderDate={this.props.orderDate}
                sessionData={mappingSession}
                onOccupyClick={this.onOccupyClick}
                onReleaseClick={this.onReleaseClick}
              />
            ))}
          </Button.Group>
        </Segment>
      </Grid.Column>
    );
  }
}

export default TrackItem;
