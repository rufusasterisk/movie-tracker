import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { tryLogin, createUser } from '../../actions/LoginContainerActions';
import LoginContainer from './LoginContainer';


const middleWares = [];
const mockStore = configureStore(middleWares);
const initialStoreState = {
  loginRequested: false,
  loginFailure: false,
  loginSuccessful: false
};

describe(`LoginContainer`, () => {
  let
    wrapper,
    store,
    loginProps;

  beforeEach( () => {
    store = mockStore(initialStoreState);
    wrapper = mount(<LoginContainer store={store} />);
    loginProps = wrapper.find('Login').first().props();
  });

  it(`should mount`, () => {
    expect(wrapper.exists()).toBe(true);
  });

  it(`should connect the Login component to store`, () => {
    expect(loginProps.loginRequested).toEqual(false);
    expect(loginProps.loginFailure).toEqual(false);
    expect(loginProps.loginSuccessful).toEqual(false);
  });

  it(`should dispatch the tryLogin action from the Login component`, () => {
  //   const dispatchedValues = {"type": "TRY_LOGIN", "email": "test@email.com", "password": "myPW" };
  //   // console.log(loginProps);
  //
  //   loginProps.tryLogin(dispatchedValues);
  //   // expect(store.isActionDispatched({
  //   //   type: 'MY_TYPE'
  //   // })).toBe(true);
  });


});
