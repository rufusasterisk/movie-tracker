import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import User from './User';
import { MemoryRouter as Router } from 'react-router-dom';
import { logOut } from '../../actions/UserActions';

describe(`User button`, () => {
  const
    mountWithRouter = node => mount(<Router>{node}</Router>),
    middlewares = [],
    mockStore = configureStore(middlewares),
    initialStoreState = {
      currentUserName: '',
      loginSuccessful: false
    },
    altStoreState = {
      currentUserName: 'testName',
      loginSuccessful: true
    };

  let
    wrapper,
    altWrapper,
    store,
    altStore;

  beforeEach( () => {
    store = mockStore(initialStoreState);
    wrapper = mountWithRouter(<User store={store} />);
    altStore = mockStore(altStoreState);
    altWrapper = mountWithRouter(<User store={altStore} />);
  });

  it(`should shallow`, () => {
    expect(wrapper.exists()).toBe(true);
  });

  it(`should start logged out`, () => {
    expect(wrapper.find('.link-to-log-in').length).toEqual(1);
  });

  it(`should render the logged in option`, () => {
    expect(altWrapper.find('button').text()).toEqual('Log Out');
  });
  //
  // it(`should display the user name`, () => {
  //   expect(altWrapper.find('h3').text()).toEqual('Welcome, testName');
  // });

  it(`should dispatch the logOut action`, () => {
    // altWrapper.find('button').simulate('click');
    // altWrapper.find('User').first().props().handleLogOut();
    // console.log(store);
    // console.log(store.getActions()); //this should have the LOG_OUT action :(
  });

});
