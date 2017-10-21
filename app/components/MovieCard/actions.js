export const addToFavorites = (data) => ({
  type: 'ADD_TO_FAVORITES',
  data
})

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

export const setFavoriteCount = (data) => ({
  type: 'SET_FAVORITE_COUNT',
  data
})

export const increaseFavoriteCount = () => ({
  type: 'INCREASE_FAVORITE_COUNT'
})

export const decreaseFavoriteCount = () => ({
  type: 'DECREASE_FAVORITE_COUNT'
})

// export const fetchFavorites = (data) => ({
//   type: 'FETCH_FAVORITES',
//   data
// })
