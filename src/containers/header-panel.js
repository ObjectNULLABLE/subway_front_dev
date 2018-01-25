import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser, getUser, purgeUser } from '../actions/auth';
import { connect } from 'react-redux';

import '../App.css';

import { Menu, Button, Header, Modal, Dropdown } from 'semantic-ui-react';
import LoginForm from '../components/forms/login-form';

class HeaderPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginModalOpen: false
    };

    this.onLoginSubmit = this.onLoginSubmit.bind(this);
  }

  componentDidMount() {
    if (localStorage.getItem('userID'))
      this.props.getUser(localStorage.getItem('userID'));
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

  onLogoutClick = () => {
    this.props.purgeUser();
    localStorage.clear();
  };

  renderLoginDialog() {
    return (
      <Modal
        open={this.state.isLoginModalOpen}
        onClose={this.handleClose}
        dimmer="blurring"
        size="mini"
      >
        <Modal.Header>Log-in to your account</Modal.Header>
        <Modal.Content>
          <LoginForm onLoginSubmit={this.onLoginSubmit} buttonColor="teal" />
        </Modal.Content>
      </Modal>
    );
  }

  render() {
    return (
      <Menu size="large" className="Header-panel">
        <Menu.Item header as={Link} to="/">
          <Header size="huge">Subway</Header>
        </Menu.Item>

        <Menu.Item>
          <Button as={Link} to="/menu">
            Menu
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button as={Link} to="/events">
            Events
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button as={Link} to="/gallery">
            Gallery
          </Button>
        </Menu.Item>

        <Menu.Item>
          <Button as={Link} to="/about">
            About
          </Button>
        </Menu.Item>

        {this.props.user.userLoggedIn ? (
          <Menu.Item position="right">
            <Dropdown text={this.props.user.name} button simple>
              <Dropdown.Menu>
                <Dropdown.Item>Cart</Dropdown.Item>
                <Dropdown.Item>Options</Dropdown.Item>
                <Dropdown.Item>History</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={this.onLogoutClick} text="Logout" />
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        ) : (
          <Menu.Menu position="right">
            <Menu.Item>
              <Button as={Link} to="/registration">
                Register
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button onClick={this.handleOpen}>Login</Button>
            </Menu.Item>
          </Menu.Menu>
        )}

        {this.renderLoginDialog()}
      </Menu>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, {
  fetchUser,
  getUser,
  purgeUser
})(HeaderPanel);
