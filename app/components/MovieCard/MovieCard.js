import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';

const MovieCard = (props) => {
  const {backdrop, description, poster, title, voteAvg, overview, currentUserID, movieID, release, addCardToFavorites, increaseFavoriteCount, movieArray , favorites, isFavorited } = props;

  const checkIfFavorited = () => {
    if (currentUserID === '') {
      alert('You have to have an account to favorite a movie!')
      //re-route to login page
    } else {
      addToFavorites();
      const findNewFavorite = movieArray.find(movie => {
        return movieID === movie.id;
      })
      const favoritedIndex = movieArray.indexOf(findNewFavorite);
      const newMovieArray = movieArray;
      newMovieArray[favoritedIndex].isFavorited = !movieArray[favoritedIndex].isFavorited;
    }
  }

  const addToFavorites = () => {
    increaseFavoriteCount();
    addCardToFavorites({
      user_id: currentUserID,
      poster_path: poster,
      vote_average: voteAvg,
      overview: description,
      movie_id: movieID,
      release_date: release,
      title,
      isFavorited: true
    })
  }

  const removeFromFavorites = () => {
    decreaseFavoriteCount();
  }

  const favorited = () => {
    console.log('we are inside fave');
    return (<div className="movie-card">
        <img className="poster-img" src={`http://image.tmdb.org/t/p/w500${poster}`} />
        <div className="full-btn" onClick={checkIfFavorited}></div>
      </div>
    );
  }

  const notFavorited = () => {
    console.log('we are inside NOTfave');
    return (<div className="movie-card">
      <img className="poster-img" src={`http://image.tmdb.org/t/p/w500${poster}`} />
      <div className="empty-btn" onClick={checkIfFavorited}></div>
    </div>
    );
  }
  console.log('should see true twice:', isFavorited);
  const typeCard = isFavorited ? favorited() : notFavorited();
    return (
    <div>{typeCard}</div>
    );
    
// {/* <h3>{title}</h3>
// <ul>
// <li><button onClick={checkIfFavorited}>FAVE</button></li>
// <li>{description}</li>
// <li>{voteAvg}</li>
// </ul> */}
// {/* <img src={`http://image.tmdb.org/t/p/w1920${backdrop}`} /> */}
}

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  voteAvg: PropTypes.number,
  poster: PropTypes.string,
  backdrop: PropTypes.string
};

export default MovieCard;
