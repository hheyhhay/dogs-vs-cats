import React, { useState, useEffect } from 'react';

import './App.css';

const App = () => {
  const [animalChoice, setAnimalChoice] = useState('');

  const onChange = (e) => {
    setAnimalChoice(e.target.value)
  }

  return (
    <main className='App' onChange = {(e) => onChange(e)}>
      <h1 className='header'> Do you like Dogs or Cats? </h1>
      <div className='radio-choice'>
        <input type='radio' value='dog' name='animal-choice'/> Dogs!
        <input type='radio' value='cat' name='animal-choice'/> Cats!
      </div>
    </main>
  )
}
export default App;
