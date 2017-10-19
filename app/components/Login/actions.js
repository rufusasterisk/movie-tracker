import hostAddress from '../../utils/hostAddress';

const buildFetchPayload = (body) => ({
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
});

export const userLogin = (username, password) => ({
  type: 'USER_LOGIN',
  username,
  password
});

export const loginRequested = (status) => ({
  type: 'LOGIN_REQUESTED',
  status
});

export const loginFailure = (status) => ({
  type: 'LOGIN_FAILURE',
  status
});

export const loginSuccessful = (userData) => ({
  type: 'LOGIN_SUCCESSFUL',
  userData
});

// export const createUserRequested = () => ({
//   type: 'CREATE_USER_REQUESTED'
// });
//
// export const createUserFailure = () => ({
//   type: 'CREATE_USER_FAILURE'
// });
//
// export const createUserSuccess = () => ({
//   type: 'CREATE_USER_SUCCESS'
// });


//fetchPayloadBody = {email: ****, password: ****}
export const tryLogin = (fetchPayloadBody) => dispatch => {
  dispatch(loginRequested(true));
  fetch(hostAddress, buildFetchPayload(fetchPayloadBody))
    .then(response => {
      if (response.status !== 200){
        throw Error();
      }
      return response.json();
    })
    .then(parsedData => {
      dispatch(loginRequested(false));
      dispatch(loginFailure(false));
      dispatch(loginSuccessful(parsedData));
    })
    .catch(()=>{
      dispatch(loginFailure(true));
    });//set into state)

  //fetch call
  //on success
    //dispatch(loginSuccessful(fetch response object))
  //on failure
    //dispatch(loginFailed())
};


// Few problems to solve
// 1) When are actions triggered? (How much behavior lives in the component)
  // When a login is successful
// 2) What actions are triggered?
  // update logged in user in Store


//sign in action - Store needs to know logged in user

// We have to manage a login through an API in a react-redux project with Thunk middleware
// The login should allow people to login or create a new user by interacting with an api
// Where should the API communication happen?
// Should it happen inside of the Component?
// The component is currently stateful to handle text input fields.
// Should it happen via middleware actions?

// We're having difficulty deciding what is the best practice - the data we want in
// store is based on a successful login (What user ID is logged in) - Should the
// data we don't need in store live in store anyway, or should the Component trigger
// an action on a successful login?
