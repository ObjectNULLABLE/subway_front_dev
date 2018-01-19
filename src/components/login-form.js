import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


export default class LoginForm extends Component {
  render() {
    return (
      <Form size={this.props.size}>
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
        <Button color={this.props.buttonColor} fluid size='large' onClick={this.props.handleClose} >Login</Button>
      </Form>
    )
  }
}