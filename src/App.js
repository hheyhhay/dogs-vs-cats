import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Results from './Results';
import Favorites from './Favorites';
import { Route, Switch, Link } from 'react-router-dom';
import { fetchCatData, fetchDogData } from './apiCalls';
import { organizeCat, organizeDog } from './util';

import './App.css';

const App = () => {
  const [animalChoice, setAnimalChoice] = useState('');
  const [favoriteCats, setFavoriteCats] = useState([]);
  const [favoriteDogs, setFavoriteDogs] = useState([]);
  const [catPicture, setCatPicture] =useState({});
  const [dogPicture, setDogPicture] = useState({});
   // move to App -> make result a sibling

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

  const handleChange = (e, image) => {

    if (e.target.className === 'cat-image'){
        setFavoriteCats([...favoriteCats, image])
    } else {
      setFavoriteDogs([...favoriteDogs, image])
    }
    setImageCount(imageCount+1)
    getData()
  }

  const onChange = (e) => {
    // e.preventDefault()
    setAnimalChoice(e.target.value)
  }
  const onClick = (e) => {
    e.preventDefault()
    console.log('startgame')
  }

  return (
    <main className='App' onChange = {(e) => onChange(e)}>
      <h1 className='header'> Are you a dog person or a cat person? </h1>

      <Route exact path='/'>
        <div className='radio-choice'>
          <input type='radio' value='dog' name='animal-choice'/> Dogs!
          <input type='radio' value='cat' name='animal-choice'/> Cats!

        <Link to={'/game'} >
        {animalChoice &&  <button>Start Game</button> }
        </Link>
        {!animalChoice && <div>Choose an Animal, please</div>}
        </div>
      </Route>
      <Route exact path='/game'>
        <Game
            animalChoice={animalChoice}
            handleChange={handleChange}
            catPicture={catPicture}
            dogPicture={dogPicture}
            imageCount={imageCount}
            />
      </Route>
      <Route exact path='/results' >
        <Results
          animalChoice={animalChoice}
          favoriteCats={favoriteCats}
          favoriteDogs={favoriteDogs}
          />
      </Route>
      <Route exact path='/favorites'>
        <Favorites
          favoriteCats={favoriteCats}
          favoriteDogs={favoriteDogs}
        />
      </Route>


    </main>
  )
}
export default App;


// {animalChoice && <Game
//     animalChoice={animalChoice}
//     /> }
