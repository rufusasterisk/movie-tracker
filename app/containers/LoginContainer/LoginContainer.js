import { connect } from 'react-redux';
import { tryLogin, createUser } from '../../actions/LoginContainerActions';
import Login from '../../components/Login/Login';

const mapStateToProps = store => ({
  loginRequested: store.loginRequested,
  loginFailure: store.loginFailure,
  loginSuccessful: store.loginSuccessful,
  createUserRequested: store.createUserRequested,
  createUserSuccess: store.createUserSuccess,
  createUserFailure: store.createUserFailure
});

const mapDispatchToProps = dispatch => ({
  tryLogin: (loginObject) => {
    dispatch(tryLogin(loginObject));
  },
  createUser: (createUserObject)  => {
    dispatch(createUser(createUserObject));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
