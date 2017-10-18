import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      password: '',
      verifyPassword: '',
      displayedTab: 'login'
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(){

  }



  generateLoginTab() {
    return (
      <form>
        <input
          className='login-email'
          onChange={this.handleChange.bind(this, 'email')}
          placeholder='Email'
          type='text'
          value={this.state.email} />
        <input
          className='login-password'
          onChange={this.handleChange.bind(this, 'password')}
          placeholder='Password'
          type='text'
          value={this.state.password} />
        <input
          className='login-submit'
          onClick={this.handleSubmit}
          type='submit'
          value='Login'
        />
      </form>
    );
  }

  generateNewUserTab() {

  }

  render() {
    const generatorReturn = this.state.displayedTab === 'login'
      ? this.generateLoginTab()
      : this.generateNewUserTab();
    return (
      <div>
        {generatorReturn}
      </div>
    );
  }

}
