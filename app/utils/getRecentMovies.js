import apiKey from './apiKey';

const getRecentMovies = () => {
  return fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`)
    .then(results => results.json())
    .then(movieData => cleanMovieData(movieData.results) );
};

const cleanMovieData = rawMovieData => {
  return rawMovieData.map( movie => {
  // const myMovies = rawMovieData.map( movie => {
    console.log(movie);
    return {
      id: movie.id,
      title: movie.title,
      voteAvg: movie.vote_average,
      poster: movie.poster_path,
      release: movie.release_date,
      description: movie.overview,
      genreIds: movie.genre_ids,
      backdrop: movie.backdrop_path
    };
  });
  // console.log(myMovies);
};
export default getRecentMovies;
