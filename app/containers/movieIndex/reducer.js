const displayMoviesReducer = (state =[], action) => {
  switch(action.type) {
    case 'DISPLAY_MOVIES':
      return action.movies;
    default: 
      return state;
  }
}