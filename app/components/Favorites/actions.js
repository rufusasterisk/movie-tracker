export const getFavorites = (data) => ({
  type: 'GET_FAVORITES',
  data
})

export const getTheFavorites = (currentUserID) => dispatch => {
  fetch(`http://localhost:3000/api/users/${currentUserID}/favorites`)
  .then(response => response.json())
  .then(parsedData => parsedData.data)
}
