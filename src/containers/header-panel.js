import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchUser, getUser, purgeUser } from '../actions/auth';
import { connect } from 'react-redux';

import '../App.css';

import {
  Menu,
  Button,
  Header,
  Modal,
  Dropdown,
  Container
} from 'semantic-ui-react';
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
    if (localStorage.getItem('token'))
      this.props.getUser(localStorage.getItem('token'));
  }

  handleOpen = () => {
    this.setState({ isLoginModalOpen: true });
  };

  handleClose = () => {
    this.setState({ isLoginModalOpen: false });
  };

  onLoginSubmit(credentials) {
    this.props.fetchUser(credentials.username, credentials.password);
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
      <Menu fixed="top" secondary color="orange" size="huge">
        <Container>
          <Menu.Item header as={Link} to="/">
            <Header color="teal" size="huge">
              Subway
            </Header>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/menu" color={this.props.buttonColor}>
              Menu
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/events" color={this.props.buttonColor}>
              Events
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/gallery" color={this.props.buttonColor}>
              Gallery
            </Button>
          </Menu.Item>

          <Menu.Item>
            <Button as={Link} to="/about" color={this.props.buttonColor}>
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
                <Button.Group size="large">
                  <Button
                    onClick={this.handleOpen}
                    color={this.props.buttonColor}
                  >
                    Login
                  </Button>
                  <Button.Or />
                  <Button
                    as={Link}
                    to="/registration"
                    color={this.props.buttonColor}
                  >
                    Register
                  </Button>
                </Button.Group>
              </Menu.Item>
            </Menu.Menu>
          )}

          {this.renderLoginDialog()}
        </Container>
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
