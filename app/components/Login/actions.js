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


export const tryLogin = (fetchPayloadBody) => dispatch => {
  dispatch(loginRequested(true));
  fetch(`http://localhost:3000/api/users`, buildFetchPayload(fetchPayloadBody))
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
    .catch((error)=>{
      alert(error);
      dispatch(loginFailure(true));
      dispatch(loginRequested(false));
    });
};
