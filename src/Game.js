import React, { useState, useEffect } from 'react';
import { fetchCatData, fetchDogData } from './apiCalls';
import { organizeCat, organizeDog } from './util';
import { Route, Link } from 'react-router-dom';
import Results from './Results'

import './Game.css'

const Game = ( {animalChoice} ) => {
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

    {catPicture && imageCount < 3 && <img src={catPicture.url} alt={`Super cute picture of a ${catPicture.type}`} className='cat-image' onClick={(e) => handleChange(e)} />}
    {imageCount < 3 &&  <p>cats</p> && <p>or</p> }
    {dogPicture && imageCount < 3 && <img src={dogPicture.url} alt={`Super cute picture of a ${dogPicture.type}`} className='dog-image' onClick={(e) => handleChange(e)} />}
    {imageCount < 3 &&   <p>dogs</p> } 
    { imageCount === 3 && <Results
                            favoriteDogs={favoriteDogs}
                            favoriteCats={favoriteCats}
                            animalChoice={ animalChoice }
                            />
    }


    </div>
  )
}

export default Game;

// <Link to={'/results'}>
//  <button>see your results</button>
// </Link>

// <Results
//                       favoriteDogs={favoriteDogs}
//                       favoriteCats={favoriteCats}
//                       animalChoice={ animalChoice }
//                       />
