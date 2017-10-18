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

  generateLoginTab() {

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
