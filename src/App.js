import React, { useState, useEffect } from 'react';
import Game from './Game'

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
      <div className='radio-choice'>
        <input type='radio' value='dog' name='animal-choice'/> Dogs!
        <input type='radio' value='cat' name='animal-choice'/> Cats!
      </div>
      <button onClick={(e) => onClick(e)}>Start Game</button>
      {!animalChoice && <div>Choice an Animal, please</div>}
      {animalChoice && <Game />}
    </main>
  )
}
export default App;
