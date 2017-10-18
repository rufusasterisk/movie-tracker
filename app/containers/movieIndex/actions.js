import getRecentMovies from '../../utils/getRecentMovies';

export const displayMovies = movieArray => ({
  type: 'DISPLAY_MOVIES',
  movieArray
});

export const grabMovies = () => dispatch => {
  getRecentMovies()
    .then(movieArray => dispatch(displayMovies(movieArray)));
};
