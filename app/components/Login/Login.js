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
      loginDisplayed: true,
      loginData: 'No Data (yet)'
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleLogin(event) {
    event.preventDefault();
    const body = {
      email: this.state.email.toLowerCase(),
      password: this.state.password
    };
    const fetchParameters = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };
    fetch('http://localhost:3000/api/users', fetchParameters)
      .then(receivedData => receivedData.json())
      .then(cleanedData => {
        this.setState({
          loginData: JSON.stringify(cleanedData)
        });
      });
  }

  handleCreateUser(event) {
    event.preventDefault();
    //add pw verification code here (password length, matches pw confirmation
    const body = {
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      name: this.state.name.toLowerCase()
    };
    const fetchParameters = {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json'
      }
    };

    fetch('http://localhost:3000/api/users/new', fetchParameters)
      .then(receivedData => {
        if (receivedData.status !== 200) {
          throw Error(receivedData);
        }
        return receivedData.json();
      })
      .then(cleanedData => {
        this.setState({
          loginData: JSON.stringify(cleanedData)
        });
      })
      .catch(() => {
        this.setState({
          loginData: `There was a problem creating a new user`
        });
      });
  }

  toggleLogin() {
    this.setState({
      loginDisplayed: !this.state.loginDisplayed
    });
  }

  generateLoginTab() {
    return (
      <section>
        <button disabled>Login</button>
        <button onClick={this.toggleLogin}>Create</button>
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
            onClick={this.handleLogin.bind(this)}
            type='submit'
            value='Login'
          />
        </form>
        <div>
          {this.state.loginData}
        </div>
      </section>
    );
  }

  generateNewUserTab() {
    return (
      <section>
        <button onClick={this.toggleLogin}>Login</button>
        <button disabled>Create</button>
        <form>
          <input
            className='login-name'
            onChange={this.handleChange.bind(this, 'name')}
            placeholder='Name'
            type='text'
            value={this.state.name} />
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
            className='login-verify-password'
            onChange={this.handleChange.bind(this, 'verifyPassword')}
            placeholder='Verify Password'
            type='text'
            value={this.state.verifyPassword} />
          <input
            className='login-submit'
            onClick={this.handleCreateUser.bind(this)}
            type='submit'
            value='Create New User'
          />
        </form>
        <div>
          {this.state.loginData}
        </div>
      </section>
    );
  }

  render() {
    return this.state.loginDisplayed
      ? this.generateLoginTab()
      : this.generateNewUserTab();
  }

}
