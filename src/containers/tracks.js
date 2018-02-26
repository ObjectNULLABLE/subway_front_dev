import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Button } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import TrackItem from '../components/track-item';
import moment from 'moment';

import { fetchTracks, occupyTracks, releaseTracks } from '../actions/track';

import 'react-datepicker/dist/react-datepicker.css';

class Tracks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      orderDate: moment('17.02.2018.', 'DD.MM.YYYY.')
    };

    this.handleChange = this.handleChange.bind(this);
    this.onOccupyClick = this.onOccupyClick.bind(this);
    this.onReleaseClick = this.onReleaseClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchTracks(
      this.state.orderDate.format('DD.MM.YYYY.').toString()
    );
  }

  componentWillUnmount() {
    this.props.releaseTracks();
  }

  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  onOccupyClick = (sessionTime, trackId) => {
    this.props.occupyTracks(
      this.state.orderDate.format('DD.MM.YYYY').toString(),
      sessionTime,
      trackId
    );
  };

  onReleaseClick = (sessionTime, trackId) => {
    this.props.releaseTracks(
      this.state.orderDate.format('DD.MM.YYYY').toString(),
      sessionTime,
      trackId
    );
  };

  render() {
    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column width={3}>
            <DatePicker
              customInput={
                <Button
                  basic
                  color="teal"
                  size="big"
                  toggle
                  content={this.state.orderDate.format('DD.MM.YYYY').toString()}
                  icon="calendar"
                  labelPosition="right"
                />
              }
              selected={this.state.orderDate}
              onChange={this.handleChange}
              minDate={moment()}
              showDisabledMonthNavigation
            />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid padded stackable columns={4}>
            {this.props.tracks.tracksArray.map(mappingTrack => (
              <TrackItem
                key={mappingTrack.trackId}
                trackData={mappingTrack}
                onOccupyClick={this.onOccupyClick}
                onReleaseClick={this.onReleaseClick}
              />
            ))}
          </Grid>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Button fluid content="Reserve traks" size="large" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    tracks: state.tracks,
    occupyedTracks: state.tracks
  };
}

export default connect(mapStateToProps, {
  fetchTracks,
  occupyTracks,
  releaseTracks
})(Tracks);
