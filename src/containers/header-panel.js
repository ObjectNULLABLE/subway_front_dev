import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser } from '../actions/auth';
import { connect } from 'react-redux';

import '../App.css';

import { Menu, Button, Header, Modal } from 'semantic-ui-react';
import LoginForm from '../components/login-form';


class HeaderPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoginModalOpen: false
    };
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  handleOpen = () => {
    this.setState({ isLoginModalOpen: true });
  };

  handleClose = () => {
    this.setState({ isLoginModalOpen: false });
  };

  onLoginSubmit(credentials) {
    this.props.fetchUser(credentials.email, credentials.password);
    this.handleClose();
  }

  renderLoginDialog() {
    return (
      <Modal
        open={this.state.isLoginModalOpen}
        onClose={this.handleClose}
        dimmer='blurring'
        size='mini'
      >
        <Modal.Header>Log-in to your account</Modal.Header>
        <Modal.Content>
          <LoginForm onLoginSubmit={this.onLoginSubmit} buttonColor='teal' />
        </Modal.Content>
      </Modal>
    )
  }

  render() {
    return (
      <div>
        <Menu secondary size='large' className='Header-panel'>
          <Menu.Item header as={Link} to="/">
            <Header size='huge'>Subway</Header>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/menu">Menu</Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/events">Events</Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/gallery">Gallery</Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/about">About</Button>
          </Menu.Item>

          <Menu.Menu position='right'>
            <Menu.Item>
              <Button as={Link} to="/registration">Register</Button>
            </Menu.Item>

            <Menu.Item>
              <Button onClick={this.handleOpen} >Login</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>

        {this.renderLoginDialog()}
      </div>
    )
  }
}

export default connect(null, { fetchUser })(HeaderPanel)