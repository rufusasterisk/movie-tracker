export const addCardToFavorites = (data) => ({
  type: 'ADD_TO_FAVORITES',
  data
})

export const addToFavorites = fetchPayloadBody => dispatch => {
  fetch(`http://localhost:3000/api/users/favorites/new`, buildFetchPayload(fetchPayloadBody))
    .then(response => response.json())
    .then(parsedData => console.log(parsedData))
    //   dispatch(addCardToFavorites(parsedData.id))
    // })
}

export const removeFromFavorites = (data) => ({
  type: 'REMOVE_FROM_FAVORITES',
  data
})

export const resetFavorites = () => ({
  type: 'RESET_FAVORITES'
})

export const showFavorites = (data) => ({
  type: 'SHOW_FAVORITES',
  data
})

export const updateIsFavorited = (data) => ({
  type: 'UPDATE_IS_FAVORITED',
  data
})

export const setFavoriteCount = (data) => ({
  type: 'SET_FAVORITE_COUNT',
  data
})

export const increaseFavoriteCount = (state) => ({
  type: 'INCREASE_FAVORITE_COUNT',
  state
})

export const decreaseFavoriteCount = (state) => ({
  type: 'DECREASE_FAVORITE_COUNT',
  state
})

export const fetchFavorites = (data) => ({
  type: 'FETCH_FAVORITES',
  data
})

const buildFetchPayload = body => ({
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
});
