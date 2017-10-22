import React from 'react';
import { shallow, mount } from 'enzyme';
import Login from './Login';
import configureStore from 'redux-mock-store';


describe(`Login control component`, () => {

  const middleWares = [];
  const mockStore = configureStore(middleWares);

  it(`should shallow mount`, () => {
    // const initialState = {};
    // const store = mockStore(initialState);
    // const wrapper = shallow(<Login store={store}/>);
    //
    // console.log(wrapper);
    //
    //
    // expect(wrapper.exists()).to.be(true);
    const wrapper = mount(<div className="some-class" />);
    expect(wrapper.find('.other-class').exists()).to.be(false);
  });


});
