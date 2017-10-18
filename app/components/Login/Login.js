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
      loginDisplayed: true
    };
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleSubmit(){

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
            onClick={this.handleLogin}
            type='submit'
            value='Login'
          />
        </form>
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
            onClick={this.handleCreateUser}
            type='submit'
            value='Create New User'
          />
        </form>
      </section>
    );
  }

  render() {
    const generatorReturn = this.state.loginDisplayed
      ? this.generateLoginTab()
      : this.generateNewUserTab();
    return (
      <div>
        <nav
          className={this.state.loginDisplayed ? 'login' : 'newUser'}>
        </nav>
        {/* tab display and tab switching element/code */}
        {generatorReturn}
      </div>
    );
  }

}
