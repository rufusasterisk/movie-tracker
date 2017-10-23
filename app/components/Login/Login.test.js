import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';

describe(`Login component`, () => {

  let
    shallowWrapper,
    mockFunc1 = jest.fn(),
    mockFunc2 = jest.fn();

  beforeEach( () => {
    shallowWrapper = shallow(
      <Login
        loginRequested={false}
        loginFailure={false}
        loginSuccessful={false}
        tryLogin={mockFunc1}
        createUser={mockFunc2}/>
    );
  });

  it(`should shallow mount`, () => {
    expect(shallowWrapper.exists()).toBe(true);
  });

  it(`should mount`, () => {
    const wrapper = mount(<Login />);

    expect(wrapper.exists()).toBe(true);
  });

  it(`should toggle between login and new user`, () => {
    let toggleBtn = shallowWrapper.find('button').at(1);

    expect(shallowWrapper.state().loginDisplayed).toEqual(true);

    toggleBtn.simulate('click');

    expect(shallowWrapper.state().loginDisplayed).toEqual(false);

    toggleBtn = shallowWrapper.find('button').at(0);
    toggleBtn.simulate('click');

    expect(shallowWrapper.state().loginDisplayed).toEqual(true);
  });

  it(`should update email string in state on Login`, () => {
    const emailLoginField = shallowWrapper.find('.login-email').first();

    expect(shallowWrapper.state().email).toEqual('');
    emailLoginField.simulate('change', { target: { value: 'test@email.com' } });
    expect(shallowWrapper.state().email).toEqual('test@email.com');
  });

  it(`should update password string in state on Login`, () => {
    const passwordLoginField = shallowWrapper.find('.login-password').first();

    expect(shallowWrapper.state().password).toEqual('');
    passwordLoginField.simulate('change',
      { target: { value: 'myPassword' } });
    expect(shallowWrapper.state().password).toEqual('myPassword');
  });

  it(`should update name string in state on New User`, () => {
    shallowWrapper.find('button').at(1).simulate('click');
    const nameNewUserField = shallowWrapper.find('.login-name').first();

    expect(shallowWrapper.state().name).toEqual('');
    nameNewUserField.simulate('change',
      { target: { value: 'test@email.com' } });
    expect(shallowWrapper.state().name).toEqual('test@email.com');
  });

  it(`should update email string in state on New User`, () => {
    shallowWrapper.find('button').at(1).simulate('click');
    const emailNewUserField = shallowWrapper.find('.login-email').first();

    expect(shallowWrapper.state().email).toEqual('');
    emailNewUserField.simulate('change',
      { target: { value: 'test@email.com' } });
    expect(shallowWrapper.state().email).toEqual('test@email.com');
  });

  it(`should update password string in state on New User`, () => {
    shallowWrapper.find('button').at(1).simulate('click');
    const passwordNewUserField = shallowWrapper.find('.login-password').first();

    expect(shallowWrapper.state().password).toEqual('');
    passwordNewUserField.simulate('change',
      { target: { value: 'myPassword' } });
    expect(shallowWrapper.state().password).toEqual('myPassword');
  });

  it(`should update password string in state on New User`, () => {
    shallowWrapper.find('button').at(1).simulate('click');
    const verifyNewUserField =
      shallowWrapper.find('.login-verify-password').first();

    expect(shallowWrapper.state().verifyPassword).toEqual('');
    verifyNewUserField.simulate('change',
      { target: { value: 'myPassword' } });
    expect(shallowWrapper.state().verifyPassword).toEqual('myPassword');
  });

  it(`should pass email and password to tryLogin on submit`, () => {
    const emailLoginField = shallowWrapper.find('.login-email').first();
    const passwordLoginField = shallowWrapper.find('.login-password').first();
    const submitBtn = shallowWrapper.find('.login-submit').first();
    const expected = {
      "email": "test@email.com",
      "password": "myPassword"
    };

    emailLoginField.simulate('change', { target: { value: 'test@email.com' } });
    passwordLoginField.simulate('change',
      { target: { value: 'myPassword' } });
    submitBtn.simulate('click', {
      preventDefault: () => {
      }
    });

    expect(mockFunc1.mock.calls.length).toBe(1);
    expect(mockFunc1.mock.calls[0][0]).toEqual(expected);

  });

  it(`should pass email and password to createUser on submit`, () => {
    shallowWrapper.find('button').at(1).simulate('click');

    const nameUserField = shallowWrapper.find('.login-name').first();
    const emailUserField = shallowWrapper.find('.login-email').first();
    const passwordUserField = shallowWrapper.find('.login-password').first();
    const submitBtn = shallowWrapper.find('.login-submit').first();
    const expected = {
      "name": "myname",
      "email": "test@email.com",
      "password": "myPassword"
    };

    nameUserField.simulate('change', { target: { value: 'myname' } });
    emailUserField.simulate('change', { target: { value: 'test@email.com' } });
    passwordUserField.simulate('change',
      { target: { value: 'myPassword' } });
    submitBtn.simulate('click', {
      preventDefault: () => {
      }
    });

    expect(mockFunc2.mock.calls.length).toBe(1);
    expect(mockFunc2.mock.calls[0][0]).toEqual(expected);

  });

});
