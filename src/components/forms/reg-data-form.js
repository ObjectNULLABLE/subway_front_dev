import React, { Component } from 'react';
import { Form, Button, Header, Divider } from 'semantic-ui-react';

export default class RegDataForm extends Component {
  constructor(props) {
    super(props);

    this.setState({
      username: '',
      password: '',
      confPassword: '',
      name: '',
      email: '',
      phone: ''
    });
  }

  render() {
    return (
      <Form size="large">
        <Form.Field>
          <Header>{'Create your account'}</Header>
        </Form.Field>

        <Form.Input placeholder="Username" name="username" />

        <Form.Input placeholder="Password" type="password" name="password" />

        <Form.Input
          placeholder="Confirm password"
          type="password"
          name="confPassword"
        />

        <Divider horizontal section>
          {'Help us serve you better '}
        </Divider>

        <Form.Input placeholder="Name" name="name" />

        <Form.Input placeholder="E-mail" name="email" />

        <Form.Input placeholder="Phone number" name="phone" />

        <Button color="teal" size="large" content="Sign up" fluid />

        <Divider hidden />
      </Form>
    );
  }
}
