import { logOut } from '../../components/User/actions';

describe(`logOut action`, () => {
  it(`should return an action object`, () => {
    const expected = {
      type: 'LOG_OUT'
    };

    expect(logOut()).toEqual(expected);
  });
});
