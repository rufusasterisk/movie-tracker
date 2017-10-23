import {
  favoritesCounter,
  favorites,
  updateIsFavorited } from '../../reducers/MovieCardReducers';

describe(`favoritesCounter reducer`, () => {
  it(`returns a default state`, () => {
    const mockAction = { type: '' };

    expect(favoritesCounter(undefined, mockAction)).toEqual(0);
  });

  it(`sets a favorite count`, () => {
    const mockSetPayload = {
      info: 42,
      type: 'SET_FAVORITE_COUNT'
    };

    expect(favoritesCounter(undefined, mockSetPayload)).toEqual(42);
  });

  it(`resets the favorites count`, () => {
    const mockResetPayload = {
      type: 'RESET_FAVORITES'
    };

    expect(favoritesCounter(42, mockResetPayload)).toEqual(0);
  });

  it(`increases the favorite count`, () => {
    const mockIncreasePayload = {
      type: 'INCREASE_FAVORITE_COUNT'
    };

    expect(favoritesCounter(41, mockIncreasePayload)).toEqual(42);
  });

  it(`decreases the favorite count`, () => {
    const mockDecreasePayload = {
      type: 'DECREASE_FAVORITE_COUNT'
    };

    expect(favoritesCounter(43, mockDecreasePayload)).toEqual(42);
  });

});

describe(`favorites reducer`, () => {
  it(`retuns a default state`, () => {
    const mockAction = { type: '' };

    expect(favorites(undefined, mockAction)).toEqual([]);
  });
});
