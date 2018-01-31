import React, { Component } from 'react';
import { Form, Button, Header, Divider } from 'semantic-ui-react';

export default class RegDataForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confPassword: '',
      name: '',
      email: '',
      phone: ''
    };
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value });

  render() {
    return (
      <Form size="large">
        <Form.Field>
          <Header>{'Create your account'}</Header>
        </Form.Field>

        <Form.Input
          onChange={this.handleChange}
          placeholder="Username"
          name="username"
        />

        <Form.Input
          onChange={this.handleChange}
          placeholder="Password"
          type="password"
          name="password"
        />

        <Form.Input
          onChange={this.handleChange}
          placeholder="Confirm password"
          type="password"
          name="confPassword"
        />

        <Divider horizontal section>
          {'Help us serve you better '}
        </Divider>

        <Form.Input
          onChange={this.handleChange}
          placeholder="Name"
          name="name"
        />

        <Form.Input
          onChange={this.handleChange}
          placeholder="E-mail"
          name="email"
        />

        <Form.Input
          onChange={this.handleChange}
          placeholder="Phone number"
          name="phone"
        />

        <Button
          color="teal"
          size="large"
          content="Sign up"
          fluid
          onClick={() => {
            this.props.onSignUpClick(this.state);
          }}
        />

        <Divider hidden />
      </Form>
    );
  }
}
