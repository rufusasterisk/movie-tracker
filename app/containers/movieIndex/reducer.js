const displayMoviesReducer = (state =[], action) => {
  switch(action.type) {
    case 'DISPLAY_MOVIES':
      return action.movieArray;
    default:
      return state;
  }
}

export default displayMoviesReducer;
