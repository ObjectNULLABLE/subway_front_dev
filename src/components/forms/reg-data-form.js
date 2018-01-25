import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

export default class LoginForm extends Component {
  render() {
    return (
      <Form>
        <Form.Input placeholder="Username" name="username" />

        <Form.Input placeholder="Password" type="password" name="password" />

        <Form.Input
          placeholder="Confirm password"
          type="password"
          name="confPassword"
        />

        <Button
          color="green"
          size="large"
          content="Next step"
          floated="right"
        />
      </Form>
    );
  }
}
