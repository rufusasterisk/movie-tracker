export const addCardToFavorites = (info) => ({
  type: 'ADD_TO_FAVORITES',
  info
});

const buildFetchPayload = body => ({
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
});

export const addToFavorites = fetchPayloadBody => dispatch => {
  fetch(`http://localhost:3000/api/users/${fetchPayloadBody.user_id}/favorites`)
    .then(response => response.json())
    .then(parsedData => {
      return parsedData.data.find(favorite => {
        return favorite.movie_id === fetchPayloadBody.movie_id;
      });
    })
    .then(found => {
      if (!found) {
        fetch(`http://localhost:3000/api/users/favorites/new`,
          buildFetchPayload(fetchPayloadBody))
          .then(response => response.json());
      }
    //else - remove it
    });
};

export const removeFromFavorites = (info) => ({
  type: 'REMOVE_FROM_FAVORITES',
  info
});

export const resetFavorites = () => ({
  type: 'RESET_FAVORITES'
});

export const showFavorites = (info) => ({
  type: 'SHOW_FAVORITES',
  info
});

export const updateIsFavorited = (info) => ({
  type: 'UPDATE_IS_FAVORITED',
  info
});

export const setFavoriteCount = (info) => ({
  type: 'SET_FAVORITE_COUNT',
  info
});

export const increaseFavoriteCount = (state) => ({
  type: 'INCREASE_FAVORITE_COUNT',
  state
});

export const decreaseFavoriteCount = (state) => ({
  type: 'DECREASE_FAVORITE_COUNT',
  state
});

export const fetchFavorites = (info) => ({
  type: 'FETCH_FAVORITES',
  info
});
