import React from 'react';
import PropTypes from 'prop-types';
import * as actions from './actions';
// import { addToFavorites } from '../../utils/favorites';

const MovieCard = (props) => {
  // const {backdrop, description, poster, title, voteAvg, overview, currentUserID, movieID, release, addCardToFavorites, increaseFavoriteCount } = props;

  const checkIfFavorited = () => {
    if (props.currentUserID === '') {
      console.log('in no user logged in if block');
      //re-route to login page
    } else {
      console.log('in else blcok: ');
      addToFavorites();
      //!movie.isFavorited ? addToFavorites() : removeFromFavorites()
    }
  }

  const addToFavorites = () => {
    console.log('props: ', props.increaseFavoriteCount);
    props.increaseFavoriteCount();
    // addCardToFavorites({
    //   user_id: currentUserID,
    //   poster_path: poster,
    //   vote_average: voteAvg,
    //   overview: description,
    //   movie_id: movieID,
    //   release_date: release,
    //   title
    // })
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
      <img src={`http://image.tmdb.org/t/p/w500${props.poster}`} />
      <h3>{props.title}</h3>
      <ul>
        <li><button onClick={checkIfFavorited}>FAVE</button></li>
        <li>{props.description}</li>
        <li>{props.voteAvg}</li>
      </ul>
      <img src={`http://image.tmdb.org/t/p/w1920${props.backdrop}`} />
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
