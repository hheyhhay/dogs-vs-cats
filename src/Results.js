import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Results.css'

const Results = ( {favoriteCats, favoriteDogs, animalChoice }) => {
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
        <img src={image.url} alt={`Super cute picture of a ${image.type}`}className={`${image.type}-image`} />
        )
      })
    return imageCards;
  }

  const winnerText = () => {
    console.log('animalChoice', animalChoice)
    if (winner === animalChoice) {
      return <p>{`Incredible! You knew you were a ${animalChoice} person`} </p>
    } else {
      return <p>{`Opps! You are achually not a ${animalChoice} person, but a ${winner} person`} </p>
    }
  }


  return (
    <div>
    <h1>{winnerText()}</h1>
    {winner === 'cat' && <div>{images}</div>}
    {winner === 'dog' && <div>{images}</div>}
    <Link to={'/'}>
      <button>Try again </button>
    </Link>
    </div>
  )
}

export default Results;
