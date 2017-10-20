import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { tryLogin, createUser } from './actions';
import { Redirect } from 'react-router';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: 'b',
      name: '',
      password: 'c',
      verifyPassword: '',
      loginDisplayed: true
    };
  }

  handleChange(key, event) {
    this.setState({
      [key]: event.target.value
    });
  }

  handleLogin = (event) => {
    event.preventDefault();
    this.props.tryLogin({
      email: this.state.email,
      password: this.state.password});
  }

  handleCreateUser = (event) => {
    event.preventDefault();
    this.props.createUser({
      email: this.state.email.toLowerCase(),
      password: this.state.password,
      name: this.state.name.toLowerCase()
    });
  }

  toggleLogin = () => {
    this.setState({
      loginDisplayed: !this.state.loginDisplayed
    });
  }

  generateLoginStatus() {
    if (this.props.loginSuccessful) {
      return (
        <Redirect to="/"/>
      )
    };

    if (this.props.loginFailure) {
      return (
        <div>Email and Password do not match</div>
      )
    };

    if (this.props.loginRequested) {
      return (
        <div>LOADING!!!</div>
      )
    };

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
            type='email'
            value={this.state.email} />
          <input
            className='login-password'
            onChange={this.handleChange.bind(this, 'password')}
            placeholder='Password'
            type='password'
            value={this.state.password} />
          <input
            className='login-submit'
            onClick={this.handleLogin.bind(this)}
            type='submit'
            value='Login' />
        </form>
        <div>
          {this.generateLoginStatus()}
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
            onClick={this.handleCreateUser}
            type='submit'
            value='Create New User'
          />
        </form>
        <div>
          {/* {fakeProps.createError ? 'That email is in use' : null} */}
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

Login.propTypes = {
  loginRequested: PropTypes.bool,
  loginFailure: PropTypes.bool,
  loginSuccessful: PropTypes.bool,
  tryLogin: PropTypes.func
};

const mapStateToProps = store => ({
  loginRequested: store.loginRequested,
  loginFailure: store.loginFailure,
  loginSuccessful: store.loginSuccessful
});

const mapDispatchToProps = dispatch => ({
  tryLogin: (loginObject) => {
    dispatch(tryLogin(loginObject));
  },
  createUser: (createUserObject)  => {
    dispatch(createUser(createUserObject))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
