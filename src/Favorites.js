import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import './Favorites.css'

const Favorites = ({favoriteCats, favoriteDogs, clearFavorites }) => {
  const totalFavorite = favoriteCats.concat(favoriteDogs)
  const favoriteCards = totalFavorite.map(image => {
    return(
      <img src={image.url} alt={`Super cute picture of a ${image.type}`}className={`${image.type}-image`} />
    )
  })
  return (
    <div className='favorite-section'>
      <div className='favorite-container'>{favoriteCards}</div>
      <Link to={'/'}>
        <button onClick={clearFavorites}>Take Test </button>
      </Link>
    </div>
  )
}

export default Favorites;
