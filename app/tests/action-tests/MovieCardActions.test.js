import fetchMock from 'fetch-mock';
import {
  addCardToFavorites,
  addToFavorites,
  removeFromFavorites,
  resetFavorites,
  showFavorites,
  updateIsFavorited,
  setFavoriteCount,
  increaseFavoriteCount,
  decreaseFavoriteCount,
  fetchFavorites } from '../../actions/MovieCardActions';
const testinfo = {
  info1: 'testinfo1',
  info2: 2,
  info3: true
};


describe(`addCardToFavorites actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'ADD_TO_FAVORITES',
      info: testinfo
    };

    expect(addCardToFavorites(testinfo)).toEqual(expectation);
  });
});

describe(`addToFavorites actions`, () => {
  const mockPayloadBody = {
    user_id: 1,
    poster_path: "/qmi2dsuoyzZdJ0WFZYQazbX8ILj.jpg",
    vote_average: "7",
    overview: "A couple's relationship is tested when uninvited...",
    movie_id: 381283,
    release_date: "2017-09-13",
    "title": "mother!",
    isFavorited: true
  };
  const mockGetURL = `http://localhost:3000/api/users/1/favorites`;
  const mockGetResponse = `{
    "status": "success",
    "info": [
      {
        "id": 1,
        "movie_id": 440021,
        "user_id": 1,
        "title": "Happy Death Day",
        "poster_path": "/cTaEIUYTt52ooq9quVbAQ7NpGwo.jpg",
        "release_date": "2017-10-12",
        "vote_average": "7",
        "overview": "A college student relives the day of her murder..."
      },
      {
        "id": 2,
        "movie_id": 341013,
        "user_id": 1,
        "title": "Atomic Blonde",
        "poster_path": "/kV9R5h0Yct1kR8Hf8sJ1nX0Vz4x.jpg",
        "release_date": "2017-07-26",
        "vote_average": "6.2",
        "overview": "An undercover MI6 agent is sent to Berlin..."
      }
    ],
    "message": "Retrieved All favorites"
    }`;
  const mockPostURL = `http://localhost:3000/api/users/favorites/new`;
  const mockPostResponse = `{
    "status": "success",
    "message": "Movie was added to favorites",
    "id": 3
  }`;


  it(`should add a favorite`, () => {
    fetchMock.get(mockGetURL, mockGetResponse);
    fetchMock.post(mockPostURL, mockPostResponse);
    const myFunc = addToFavorites(mockPayloadBody);
    //expect the line below to not cause an error?
    myFunc();
    expect(true).toBe(true);
  });
});

describe(`removeFromFavorites actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'REMOVE_FROM_FAVORITES',
      info: testinfo
    };

    expect(removeFromFavorites(testinfo)).toEqual(expectation);
  });
});

describe(`resetFavorites actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'RESET_FAVORITES'
    };

    expect(resetFavorites()).toEqual(expectation);
  });
});

describe(`showFavorites actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'SHOW_FAVORITES',
      info: testinfo
    };

    expect(showFavorites(testinfo)).toEqual(expectation);
  });
});

describe(`updateIsFavorited actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'UPDATE_IS_FAVORITED',
      info: testinfo
    };

    expect(updateIsFavorited(testinfo)).toEqual(expectation);
  });
});

describe(`setFavoriteCount actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'SET_FAVORITE_COUNT',
      info: testinfo
    };

    expect(setFavoriteCount(testinfo)).toEqual(expectation);
  });
});

describe(`increaseFavoriteCount actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'INCREASE_FAVORITE_COUNT',
      state: testinfo
    };

    expect(increaseFavoriteCount(testinfo)).toEqual(expectation);
  });
});

describe(`decreaseFavoriteCount actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'DECREASE_FAVORITE_COUNT',
      state: testinfo
    };

    expect(decreaseFavoriteCount(testinfo)).toEqual(expectation);
  });
});

describe(`fetchFavorites actions`, () => {

  it(`should return an action`, () => {
    const expectation = {
      type: 'FETCH_FAVORITES',
      info: testinfo
    };

    expect(fetchFavorites(testinfo)).toEqual(expectation);
  });
});
