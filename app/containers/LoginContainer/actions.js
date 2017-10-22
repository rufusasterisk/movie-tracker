import hostAddress from '../../utils/hostAddress';

export const buildFetchPayload = (body) => ({
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
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

export const createUserRequested = (status) => ({
  type: 'CREATE_USER_REQUESTED',
  status
});

export const createUserFailure = (status) => ({
  type: 'CREATE_USER_FAILURE',
  status
});

export const createUserSuccess = (status) => ({
  type: 'CREATE_USER_SUCCESS',
  status
});

export const createUser = fetchPayloadBody => dispatch => {
  dispatch(createUserRequested(true));
  fetch(
    'http://localhost:3000/api/users/new',
    buildFetchPayload(fetchPayloadBody))
    .then(response => {
      if (response.status !== 200) {
        throw Error(response);
      }
      return response.json();
    })
    .then(() => {
      dispatch(createUserRequested(false));
      dispatch(createUserSuccess(true));
    })
    .catch(() => {
      dispatch(createUserRequested(false));
      dispatch(createUserFailure(true));
    });
};

export const tryLogin = fetchPayloadBody => dispatch => {
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
    .catch(()=>{
      dispatch(loginFailure(true));
      dispatch(loginRequested(false));
    });
};
