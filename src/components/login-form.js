import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


export default class LoginForm extends Component {

  state = { email: '', password: '' }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <Form size={this.props.size}>
        <Form.Input
          fluid
          icon='user'
          iconPosition='left'
          placeholder='E-mail address'
          name='email'
          value={this.state.email}
          onChange={this.handleChange}
        />

        <Form.Input
          fluid
          icon='lock'
          iconPosition='left'
          placeholder='Password'
          type='password'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
        />

        <Button
          color={this.props.buttonColor}
          fluid
          size='large'
          onClick={() => { this.props.onLoginSubmit(this.state) }}
          content='Login'
        />
      </Form>
    )
  }
}