import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from './actions';

const User = ({ currentUserName, loginSuccessful, handleLogOut }) => {

  const generateUserMenu = () => {
    return (
      <article>
        <h3>{`Welcome, ${currentUserName}`}</h3>
        <button
          onClick={handleLogOut} >
          Log Out</button>
      </article>
    );
  };

  const generateLoginMenu = () => {
    return (
      <button className="link-to-log-in">
        <Link to="/login">Log In</Link>
      </button>
    );
  };

  return (
    loginSuccessful
      ? generateUserMenu()
      : generateLoginMenu()
  );
};

User.propTypes = {
  currentUserName: PropTypes.string,
  loginSuccessful: PropTypes.bool,
  handleLogOut: PropTypes.func
};

const mapStateToProps = store => ({
  currentUserName: store.currentUserName,
  loginSuccessful: store.loginSuccessful
});

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
