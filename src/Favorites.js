
import React from 'react';
import { Link } from 'react-router-dom';
import './Favorites.css'

const Favorites = ({favoriteCats, favoriteDogs, clearFavorites }) => {
  const totalFavorite = favoriteCats.concat(favoriteDogs)
  const favoriteCards = totalFavorite.map(image => {
    return(
      <div className='image'>
        <img src={image.url} alt={`Super cute picture of a ${image.type}`}className={`${image.type}-image`} />
      </div>

    )
  })
  return (
    <div className='favorite-section'>
    <h1>You picked some really cute pictures</h1>
      <div className='favorite-container'>{favoriteCards}</div>
      <Link to={'/'}>
        <button className='result-button restart' onClick={clearFavorites}>Take Test </button>
      </Link>
      <Link to={'/results'}>
        <button className='result-button return-results'>Return to results</button>
      </Link>
    </div>
  )
}

export default Favorites;
