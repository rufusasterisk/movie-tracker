export const addCardToFavorites = (data) => ({
  type: 'ADD_TO_FAVORITES',
  data
})

const buildFetchPayload = body => ({
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
});

const buildDeletePayload = body => ({
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: {
    user_id: body.user_id,
    movie_id: body.movie_id
  }
});

export const addToFavorites = fetchPayloadBody => dispatch => {
  fetch(`http://localhost:3000/api/users/${fetchPayloadBody.user_id}/favorites`)
    .then(response => response.json())
    .then(parsedData => {
      return parsedData.data.find(favorite => {
        return favorite.movie_id === fetchPayloadBody.movie_id;
      })
    })
    .then(found => {
      if (!found) {
        fetch(`http://localhost:3000/api/users/favorites/new`,
          buildFetchPayload(fetchPayloadBody))
      } else {
        fetch(`http://localhost:3000/api/users/${fetchPayloadBody.user_id}/favorites/${fetchPayloadBody.movie_id}`,
          buildDeletePayload(fetchPayloadBody)
        )
      }
    })
}

export const removeFromFavorites = (data) => ({
  type: 'REMOVE_FROM_FAVORITES',
  data
});

export const resetFavorites = () => ({
  type: 'RESET_FAVORITES'
});

export const showFavorites = (data) => ({
  type: 'SHOW_FAVORITES',
  data
});

export const updateIsFavorited = (data) => ({
  type: 'UPDATE_IS_FAVORITED',
  data
});

export const setFavoriteCount = (data) => ({
  type: 'SET_FAVORITE_COUNT',
  data
});

export const increaseFavoriteCount = (state) => ({
  type: 'INCREASE_FAVORITE_COUNT',
  state
});

export const decreaseFavoriteCount = (state) => ({
  type: 'DECREASE_FAVORITE_COUNT',
  state
});

export const fetchFavorites = (data) => ({
  type: 'FETCH_FAVORITES',
  data
});
