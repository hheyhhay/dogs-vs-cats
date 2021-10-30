import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css';
import PropTypes from 'prop-types';


const Favorites = ({ favoriteCats, favoriteDogs, clearFavorites }) => {
  const totalFavorite = favoriteCats.concat(favoriteDogs)
  const favoriteCards = totalFavorite.map(image => {
    return (
      <div className='image' key={ image.id }>
        <img src={ image.url } alt={ `Super cute ${image.type}` } className={ `${image.type}-image` } />
      </div>
    )
  })

  return (
    <div className='favorite-section'>
      <div className='header-container'>
        <h1>You picked some really cute pictures</h1>
      </div>
      <div className='favorite-container'>{ favoriteCards }</div>
      <Link to={ '/' }>
        <button className='result-button restart' onClick={ clearFavorites }>Take Test</button>
      </Link>
      <Link to={ '/results' }>
        <button className='result-button return-results'>Return to results</button>
      </Link>
    </div>
  )
};

export default Favorites;

Favorites.propTypes = {
  favoriteCats: PropTypes.array.isRequired,
  favoriteDogs: PropTypes.array.isRequired,
  clearFavorites: PropTypes.func.isRequired
}
