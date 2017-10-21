import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
import { addToFavorites } from '../../utils/favorites';

const MovieCard = (props) => {
  const {backdrop, description, poster, title, voteAvg, overview, currentUserID, movieID, release } = props;

  const checkIfFavorited = () => {
    if (currentUserID === '') {
      console.log('in no user logged in if block');
      //re-route to login page
    } else {
      console.log('in else blcok: ');
      addCardToFavorites();
      //!movie.isFavorited ? addToFavorites() : removeFromFavorites()
    }
  }

  const addCardToFavorites = () => {
    console.log('do we have current ID?: ', currentUserID);
    addToFavorites({
      user_id: currentUserID,
      poster_path: poster,
      vote_average: voteAvg,
      overview: description,
      movie_id: movieID,
      release_date: release,
      title
    })
  //props.increaseFavoriteCount();
  //set.add()
  }

  const removeFromFavorites = () => {
    //call a util file to run the fetch on our API
    //then call removeFromFavorites in actions,
    // props.decreaseFavoriteCount();
    //set.delete()
  }

  return (
    <div className="movie-card">
      <img src={`http://image.tmdb.org/t/p/w500${poster}`} />
      <h3>{title}</h3>
      <ul>
        <li><button onClick={checkIfFavorited}>FAVE</button></li>
        <li>{description}</li>
        <li>{voteAvg}</li>
      </ul>
      <img src={`http://image.tmdb.org/t/p/w1920${backdrop}`} />
    </div>
  );
};

MovieCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  voteAvg: PropTypes.number,
  poster: PropTypes.string,
  backdrop: PropTypes.string
};


export default MovieCard;
