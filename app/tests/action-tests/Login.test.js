import Login from '../../components/Login/Login';
import * as actions from '../../components/Login/actions';

describe(`Login`, () => {
  it(`should have helper function to build fetch payload`, () => {
    const body = {
      email: 'tman2272@aol.com',
      pasword: 'password'
    };
    const expectation = actions.buildFetchPayload(body);
    const expected = {
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'},
      method: 'POST'
    };

    expect(expectation).toEqual(expected);
  });

  it(`should have an action to request login`, () => {
    const status = true;

    const expectation = actions.loginRequested(status);
    const expectedAction = {
      type: 'LOGIN_REQUESTED',
      status
    };
    expect(expectation).toEqual(expectedAction);
  });

  it(`should have an action to signify login failure`, () => {
    const status = true;

    const expectation = actions.loginFailure(status);
    const expectedAction = {
      type: 'LOGIN_FAILURE',
      status
    };

    expect(expectation).toEqual(expectedAction);
  });

  it(`should have an action to signify login success`, () => {
    const userData = {
      email: 'tman2272@aol.com',
      password: 'password'
    };

    const expectation = actions.loginSuccessful(userData);
    const expectedAction = {
      type: 'LOGIN_SUCCESSFUL',
      userData
    };

    expect(expectation).toEqual(expectedAction);
  });

  it(`should have an action to request user creation`, () => {
    const status = true;

    const expectation = actions.createUserRequested(status);
    const expectedAction = {
      type: 'CREATE_USER_REQUESTED',
      status
    };

    expect(expectation).toEqual(expectedAction);
  });

  it(`should have an action to signify user creation failure`, () => {
    const status = true;

    const expectation = actions.createUserFailure(status);
    const expectedAction = {
      type: 'CREATE_USER_FAILURE',
      status
    };

    expect(expectation).toEqual(expectedAction);
  });

  it(`should have an action to signify user creation success`, () => {
    const status = true;

    const expectation = actions.createUserSuccess(status);
    const expectedAction = {
      type: 'CREATE_USER_SUCCESS',
      status
    };

    expect(expectation).toEqual(expectedAction);
  });

  it(`should be able to create a new user`, () => {
    const fetchPayloadBody = {
      name: 'somebody',
      email: 'tolove@aol.com',
      password: 'pw'
    };
  });
});
