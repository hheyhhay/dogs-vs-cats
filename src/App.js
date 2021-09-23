import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';
import Results from './Results';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

const App = () => {
  const [animalChoice, setAnimalChoice] = useState('');

  const onChange = (e) => {
    e.preventDefault()
    setAnimalChoice(e.target.value)
  }
  const onClick = (e) => {
    e.preventDefault()
    console.log('startgame')
  }

  return (
    <main className='App' onChange = {(e) => onChange(e)}>
      <h1 className='header'> Do you like Dogs or Cats? </h1>
      <Switch>
      <Route exact path='/'>
        <div className='radio-choice'>
          <input type='radio' value='dog' name='animal-choice'/> Dogs!
          <input type='radio' value='cat' name='animal-choice'/> Cats!
        </div>
        <Link to={'/game'} >
        {animalChoice &&  <button>Start Game</button> }
        </Link>
        {!animalChoice && <div>Choose an Animal, please</div>}
      </Route>
      <Route exact path='/game'>
        <Game
            animalChoice={animalChoice}
            />
      </Route>
      <Route exact path='/results'>
        <Results />
      </Route>
      </Switch>


    </main>
  )
}
export default App;


// {animalChoice && <Game
//     animalChoice={animalChoice}
//     /> }
