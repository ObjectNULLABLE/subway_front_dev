import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { username: '', password: '' };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Form size={this.props.size}>
        <Form.Input
          fluid
          icon="user"
          iconPosition="left"
          placeholder="Username"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <Form.Input
          fluid
          icon="lock"
          iconPosition="left"
          placeholder="Password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />

        <Button
          color={this.props.buttonColor}
          fluid
          size="large"
          onClick={() => {
            this.props.onLoginSubmit(this.state);
          }}
          content="Login"
        />
      </Form>
    );
  }
}
