import React, { useState, useEffect } from 'react';
import { fetchCatData, fetchDogData } from './apiCalls';
import { organizeCat, organizeDog } from './util';
import { Route, Link, Redirect } from 'react-router-dom';
import Results from './Results'

import './Game.css'

const Game = ( {animalChoice, handleChange, catPicture, dogPicture, imageCount } ) => {


  // const handleChange = (e) => {
  //
  //   if (e.target.className === 'cat-image'){
  //       setFavoriteCats([...favoriteCats, catPicture])
  //   } else {
  //     setFavoriteDogs([...favoriteDogs, dogPicture])
  //   }
  //   setImageCount(imageCount+1)
  //   getData()
  // }

  return (
    <div>
    {imageCount < 3 && <div className='quiz-container'>
      <div className='poloriod-card'>
        {catPicture && <img src={catPicture.url} alt={`Super cute picture of a ${catPicture.type}`} className='cat-image' onClick={(e) => handleChange(e, catPicture)} />}
      </div>
        <div className='or-div'>
          <p>or</p>
        </div>
      <div className='poloriod-card'>
        {dogPicture && <img src={dogPicture.url} alt={`Super cute picture of a ${dogPicture.type}`} className='dog-image' onClick={(e) => handleChange(e, dogPicture)} />}
      </div>
    </div>}
    { imageCount === 3 && <Redirect to='/results'
                            />
    }


    </div>
  )
}

export default Game;
// redirect at the last one to /results
// <Link to={'/results'}>
//  <button>see your results</button>
// </Link>

// <Results
//                       favoriteDogs={favoriteDogs}
//                       favoriteCats={favoriteCats}
//                       animalChoice={ animalChoice }
//                       />
