import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logOut } from './actions';

const User = ({ loginSuccessful, handleLogOut }) => {

  const generateUserMenu = () => {
    return (
      <button
        onClick={handleLogOut}
        className="link-to-log-in" >
          Log Out</button>
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
  loginSuccessful: PropTypes.bool,
  handleLogOut: PropTypes.func
};

const mapStateToProps = store => ({
  loginSuccessful: store.loginSuccessful
});

const mapDispatchToProps = dispatch => ({
  handleLogOut: () => {
    dispatch(logOut());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
