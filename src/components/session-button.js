import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';

class SessionButton extends Component {
  constructor(props) {
    super(props);

    this.state = { ...this.props.sessionData, active: false };
  }

  onSessionClick = (e, { active, session_time }) => {
    !active
      ? this.props.onOccupyClick(session_time)
      : this.props.onReleaseClick(session_time);
    this.setState({ active: !this.state.active });
  };

  render() {
    return (
      <Button
        toggle
        disabled={!this.state.available}
        active={this.state.active}
        session_time={this.state.time}
        onClick={this.onSessionClick}
      >
        {this.state.time}
      </Button>
    );
  }
}

export default SessionButton;
