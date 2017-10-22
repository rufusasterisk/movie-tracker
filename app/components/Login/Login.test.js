import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import configureStore from 'redux-mock-store';


describe(`Login control component`, () => {

  const middleWares = [];
  const mockStore = configureStore(middleWares);
  const initialStoreState = {};
  const store = mockStore(initialStoreState);
  const initialLocalState = {
    email: '',
    name: '',
    password: '',
    verifyPassword: '',
    loginDisplayed: true
  };

  it(`should shallow mount`, () => {
    const wrapper = shallow(<Login store={store}/>);

    expect(wrapper.exists()).toBe(true);
  });

  it(`should mount`, () => {
    const wrapper = mount(<Login store={store}/>);

    expect(wrapper.exists()).toBe(true);
  });

  it(`should toggle between login and new user`, () => {
    const wrapper = shallow(<Login store={store} />);
    const loginBtn = wrapper.find('button').at(1);
    // wrapper.setState(initialLocalState);

    expect(wrapper.state().loginDisplayed).toEqual(true);

    console.log(loginBtn.debug());

    loginBtn.simulate('click');

    console.log(wrapper.state());

    expect(wrapper.state('loginDisplayed')).toBe(false);

  });

  it(`should update state`, () => {

  });

});
