import React, { Component } from 'react';
import '../App.css';

import { Toolbar, ToolbarTitle, ToolbarGroup } from 'material-ui/Toolbar';
import FlatButton from 'material-ui/FlatButton';

export default class HeaderPanel extends Component {
  render() {
    return (
      <Toolbar className="Header-panel">
        <ToolbarGroup>
          <ToolbarTitle text='Subway' />
        
          <FlatButton label='Menu' primary={true} />
          <FlatButton label='Events' primary={true} />
          <FlatButton label='Gallery' primary={true} />
          <FlatButton label='About' primary={true} />
        </ToolbarGroup>
        <ToolbarGroup>
          <FlatButton label='Register' primary={true} />
          <FlatButton label='Login' primary={true} />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}