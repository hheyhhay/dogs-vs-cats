import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Favorites from './Favorites'
import Results from './Results';
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
    } else if (e.target.className === 'dog-image') {
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

    const clearFavorites = () => {
      setFavoriteCats([]);
      setFavoriteDogs([]);
      setImageCount(0)
    }

  return (
    <main className='App' onChange = {(e) => onChange(e)}>


      <Route exact path='/'>
        <h1 className='header'> Are you a dog person or a cat person? </h1>
        <h2 className='subheader'>Take the quiz to find out what you are! </h2>
        <div className='radio-choice'>
          <a className='question'>Which do you find cutest?</a>
          <div className='radio-container'>
            <label className='container'>
              <input type='radio' value='dog' name='animal-choice'/>
              <span clasName = 'radio-button'></span> Dogs!
            </label>

            <label className='container'>
              <input type='radio' value='cat' name='animal-choice'/>
              <span clasName = 'radio-button'></span> Cats!
            </label>

            <label className='container'>
              <input type='radio' value='unknown' name='animal-choice'/>
              <span clasName = 'radio-button'></span> They are both so cute!
            </label>
          </div>

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
          clearFavorites={clearFavorites}
          />
      </Route>
      <Route exact path='/favorites'>
        <Favorites
          favoriteCats={favoriteCats}
          favoriteDogs={favoriteDogs}
          clearFavorites={clearFavorites}
          />
      </Route>


    </main>
  )
}
export default App;


// {animalChoice && <Game
//     animalChoice={animalChoice}
//     /> }
