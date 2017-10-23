import {
  favoritesCounter,
  favorites,
  updateIsFavorited } from '../../components/MovieCard/reducers';

describe(`favoritesCounter reducer`, () => {



  it(`returns a default state`, () => {
    const mockAction = { type: '' };
    const expectation = favoritesCounter(undefined, mockAction);
    expect(expectation).toEqual(0);
  });

  it(`sets a favorite count`, () => {
    const mockSetPayload = {
      data: 42,
      type: 'SET_FAVORITE_COUNT'
    };
    const expectation = favoritesCounter(undefined, mockSetPayload);

    expect(expectation).toEqual(42);
  });

  it(`resets the favorites count`, () => {
    const mockResetPayload = {
      type: 'RESET_FAVORITES'
    };

    expect(favoritesCounter(42, mockResetPayload)).toEqual(0);
  });


});
