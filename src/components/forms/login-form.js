import React, { Component } from "react";
import { Form, Button, Divider } from "semantic-ui-react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = { username: "", password: "" };
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
          content="Sign in"
        />

        <Divider horizontal section>
          {"or enter with"}
        </Divider>

        <Button
          color="google plus"
          icon="google"
          onClick={this.props.onGoogleLogin}
        />
        <Button color="facebook" icon="facebook" />
        <Button color="vk" icon="vk" />
        <Button color="blue" icon="telegram" />
      </Form>
    );
  }
}
