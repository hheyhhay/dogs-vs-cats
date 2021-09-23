import React, { useState, useEffect } from 'react';
import { fetchCatData, fetchDogData } from './apiCalls';
import { organizeCat, organizeDog } from './util';

import './Game.css'

const Game = () => {
  const [catPicture, setCatPicture] =useState({});
  const [dogPicture, setDogPicture] = useState({});
  const [favoriteCats, setFavoriteCats] = useState([])
  const [favoriteDogs, setFavoriteDogs] = useState([]);
  const [imageCount,  setImageCount] = useState(0);
  const [error, setError] = useState('')

  const getData = async () => {
    try {
      const catData = await fetchCatData()
      const simpleCatData = organizeCat(catData)

      setCatPicture(simpleCatData)

      const dogData = await fetchDogData()
      const simpleDogData = organizeDog(dogData)

      setDogPicture(simpleDogData)
    }
    catch(error)
    {
      setError(error.message)
    }
  }

  useEffect(() => {
    getData();
    }, [])

  const handleChange = (e) => {
    console.log(e.target.className )
    if (e.target.className === 'cat-image'){
        setFavoriteCats([...favoriteCats, catPicture])
    } else {
      setFavoriteDogs([...favoriteDogs, dogPicture])
    }
    setImageCount(imageCount+1)
    getData()
  }

  return (
    <div>

    {catPicture && imageCount < 11 && <img src={catPicture.url} className='cat-image' onClick={(e) => handleChange(e)} />}
    <p>cats</p>
    <p>or</p>
    {dogPicture && imageCount < 11 && <img src={dogPicture.url} className='dog-image' onClick={(e) => handleChange(e)} />}
    <p>dogs</p>
    {imageCount.length === 11 && <div>GAME OVER</div>}
    </div>
  )
}

export default Game;
