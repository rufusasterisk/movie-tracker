const displayMoviesReducer = (state =[], action) => {
  switch (action.type) {
  case 'DISPLAY_MOVIES':
    return action.movieArray;
  case 'ADD_TO_FAVORITES':
    return state.map( (movie) => {
      if (movie.id === action.info.movie_id) {
        movie.isFavorited = true;
        return movie;
      } else {
        return movie;
      }

    });
  default:
    return state;
  }
};

export default displayMoviesReducer;
