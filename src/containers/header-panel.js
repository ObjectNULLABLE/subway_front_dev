import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchUserToken, getUser, purgeUser } from '../actions/auth';
import { connect } from 'react-redux';

import '../App.css';

import {
  Menu,
  Button,
  Header,
  Modal,
  Dropdown,
  Responsive,
  Visibility
} from 'semantic-ui-react';

import LoginForm from '../components/forms/login-form';

export class HeaderPanel extends Component {
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

  handleOpen = () => this.setState({ isLoginModalOpen: true });

  handleClose = () => this.setState({ isLoginModalOpen: false });

  hideFixedMenu = () => this.setState({ fixed: false });

  showFixedMenu = () => this.setState({ fixed: true });

  onLoginSubmit(credentials) {
    this.props.fetchUserToken(credentials.username, credentials.password);
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
        <Modal.Header>Sign In to your account</Modal.Header>
        <Modal.Content>
          <LoginForm onLoginSubmit={this.onLoginSubmit} buttonColor="teal" />
        </Modal.Content>
      </Modal>
    );
  }

  render() {
    const { fixed } = this.state;

    return (
      <Responsive minWidth={920}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Menu fixed={fixed ? 'top' : null} size="huge">
            <Menu.Item header as={Link} to="/">
              <Header color="teal" size="huge">
                Subway
              </Header>
            </Menu.Item>

            <Menu.Item>
              <Button
                as={Link}
                to="/menu?category=all"
                color={this.props.buttonColor}
              >
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
            <Menu.Item>
              <Button as={Link} to="/cart" color={this.props.buttonColor}>
                Cart
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button as={Link} to="/tracks" color={this.props.buttonColor}>
                Traks
              </Button>
            </Menu.Item>

            {this.props.user.userLoggedIn ? (
              <Menu.Item position="right">
                <Dropdown
                  as={Link}
                  to="/current"
                  text={this.props.user.name}
                  button
                  simple
                >
                  <Dropdown.Menu>
                    <Dropdown.Item content="Cart" />
                    <Dropdown.Item content="Options" />
                    <Dropdown.Item content="History" />
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={this.onLogoutClick} text="Logout" />
                  </Dropdown.Menu>
                </Dropdown>
              </Menu.Item>
            ) : (
              <Menu.Menu position="right">
                <Menu.Item>
                  <Button
                    size="large"
                    basic
                    onClick={this.handleOpen}
                    color={this.props.buttonColor}
                    content="Sign In"
                  />
                  <Button
                    style={{ marginLeft: '0.5em' }}
                    size="large"
                    as={Link}
                    to="/registration"
                    basic
                    color={this.props.buttonColor}
                    content="Sign Up"
                  />
                </Menu.Item>
              </Menu.Menu>
            )}

            {this.renderLoginDialog()}
          </Menu>
        </Visibility>
      </Responsive>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, {
  fetchUserToken,
  getUser,
  purgeUser
})(HeaderPanel);
