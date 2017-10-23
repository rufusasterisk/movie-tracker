import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import User from './User';

describe(`User button`, () => {
  const
    middlewares = [],
    mockStore = configureStore(middlewares),
    initialStoreState = {
      currentUserName: '',
      loginSuccessful: false
    };

  let
    wrapper,
    store;

  beforeEach( () => {
    store = mockStore(initialStoreState);
    wrapper = shallow(<User store={store} />);
  });

  it(`should shallow`, () => {
    expect(wrapper.exists()).toBe(true);
  });

  it(`should start logged out`, () => {
    expect(wrapper.find('button').length).toEqual(1);
  });

});
