export const favoritesCounter = (state = 0, action) => {
  switch (action.type) {
  case 'SET_FAVORITE_COUNT':
    return action.info;
  case 'RESET_FAVORITES':
    return 0;
  case 'INCREASE_FAVORITE_COUNT':
    return state += 1;
  case 'DECREASE_FAVORITE_COUNT':
    return state -= 1;
  default:
    return state;
  }
};

export const favorites = (state = [], action) => {
  switch (action.type) {
  case 'ADD_TO_FAVORITES':
    return [...state, Object.assign({}, action.info, {isFavorite: true})];

  case 'REMOVE_FROM_FAVORITES':
    return state.filter(movie => {
      return movie.movie_id !== action.info.movie_id;
    });
  case 'FETCH_FAVORITES':
    return action.array;
  default:
    return state;
  }
};

export const updateIsFavorited = (state = [], action) => {
  switch (action.type) {
  case 'UPDATE_IS_FAVORITED':
    return action.info;
  default:
    return state;
  }
};
