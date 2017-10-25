export const addToStoreFavorites = (info) => ({
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

const buildDeletePayload = body => ({
  method: 'DELETE',
  headers: { 'Content-Type': 'application/json' },
  body: {
    user_id: body.user_id,
    movie_id: body.movie_id
  }
});

export const newAddToFavorites = fetchPayloadBody => dispatch => {
  fetch(`http://localhost:3000/api/users/favorites/new`,
    buildFetchPayload(fetchPayloadBody))
    .then(() => {
      dispatch(addToStoreFavorites(fetchPayloadBody));
    })
    .catch( ()=> {
      alert('There was an error handling your request. Please try again.');
    });
};

export const newRemoveFromFavorites = fetchPayloadBody => dispatch => {
  fetch(
    `http://localhost:3000/api/users/
        ${fetchPayloadBody.user_id}/favorites/
        ${fetchPayloadBody.movie_id}`,
    buildDeletePayload(fetchPayloadBody))
    .then( () => {
      dispatch(removeFromStoreFavorites(fetchPayloadBody));
    })
    .catch(()=> {
      alert('There was an error handling your request. Please try again.');
    });
};

export const getAllFavorites = userID => dispatch => {
  fetch(`http://localhost:3000/users/${userID}/favorites`)
    .then( rawData => rawData.json() )
    .then( favoritesArray => {
      dispatch(fetchFavorites(favoritesArray));
    });

};


// export const addToFavorites = fetchPayloadBody => dispatch => {
//   fetch(`http://localhost:3000/api/users/${fetchPayloadBody.user_id}/favorites`)
//     .then(response => response.json())
//     .then(parsedData => {
//       return parsedData.data.find(favorite => {
//         return favorite.movie_id === fetchPayloadBody.movie_id;
//       });
//     })
//     .then(found => {
//       if (!found) { //addFunction
//         fetch(`http://localhost:3000/api/users/favorites/new`,
//           buildFetchPayload(fetchPayloadBody));
//       } else { //removeFunction
//         fetch(
//           `http://localhost:3000/api/users/
//               ${fetchPayloadBody.user_id}/favorites/
//               ${fetchPayloadBody.movie_id}`,
//           buildDeletePayload(fetchPayloadBody)
//         );
//       }
//     });
// };

export const removeFromStoreFavorites = (info) => ({
  type: 'REMOVE_FROM_FAVORITES',
  info
});

// export const resetFavorites = () => ({
//   type: 'RESET_FAVORITES'
// });

// export const showFavorites = (info) => ({
//   type: 'SHOW_FAVORITES',
//   info
// });

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

export const fetchFavorites = (array) => ({
  type: 'FETCH_FAVORITES',
  array
});
