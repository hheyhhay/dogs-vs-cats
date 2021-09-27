import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Results.css'

const Results = ( {favoriteCats, favoriteDogs, animalChoice, clearFavorites }) => {
  const [winner, setWinner] = useState('');
  const [images, setImages] = useState([]);

  const findWinner = () => {

    if(favoriteCats.length > favoriteDogs.length ) {

      let cards = displayImages(favoriteCats)
      setImages([cards])
      setWinner('cat')
    } else {
      let cards = displayImages(favoriteDogs)
      setImages([cards])
      setWinner('dog')
    }
  }

  useEffect(() => {
    findWinner()
  }, [])

  const displayImages = (images) => {

    let imageCards = images.map(image => {
      return (
        <div className='image'>
          <img src={image.url} alt={`Super cute picture of a ${image.type}`}className={`${image.type}-image`} />
        </div>
        )
      })
    return imageCards;
  }

  const winnerText = () => {

    if (winner === animalChoice) {
      return (
        <p className='result-statement'>{`Incredible! You knew you were a ${animalChoice} person`}</p>
      )
    } else if (animalChoice !== 'unknown') {
      return <p className='result-statement'>{`Opps! You are achually not a ${animalChoice} person, but a ${winner} person`}</p>
    } else {
      return <p className='result-statement'>{`You now know you are officially a ${winner} person`}</p>
    }
  }

  return (
    <div className='results-container'>
    <h1>{winnerText()}</h1>
    {winner === 'cat' && <div className='winning-images'>{images}</div>}
    {winner === 'dog' && <div className='winning-images'>{images}</div>}
    <Link to={'/'}>
      <button className='result-button restart' onClick={clearFavorites}>Try again </button>
    </Link>
    <Link to={'/favorites'} >
      <button className='result-button favorite-button' >See all your favorites</button>
    </Link>
    </div>
  )
}

export default Results;
