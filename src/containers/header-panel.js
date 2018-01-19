import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import '../App.css';

import { Menu, Button, Header, Modal, Form } from 'semantic-ui-react';
import LoginForm from '../components/login-form';


export default class HeaderPanel extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoginModalOpen: false
    };
  }

  handleOpen = () => {
    this.setState({ isLoginModalOpen: true });
  };

  handleClose = () => {
    this.setState({ isLoginModalOpen: false });
  };

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
          {/* <Form size='large'>
            <Form.Input
              fluid
              icon='user'
              iconPosition='left'
              placeholder='E-mail address'
            />
            <Form.Input
              fluid
              icon='lock'
              iconPosition='left'
              placeholder='Password'
              type='password'
            />
            <Button color='teal' fluid size='large' onClick={this.handleClose} >Login</Button>
          </Form> */}
          <LoginForm handleClose={this.handleClose} buttonColor='teal' />
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