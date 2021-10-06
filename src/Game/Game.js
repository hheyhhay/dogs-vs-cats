import React from 'react';
import { Redirect } from 'react-router-dom';
import './Game.css';
import PropTypes from 'prop-types';

const Game = ( { animalChoice, handleChange, catPicture, dogPicture, imageCount } ) => {

  return (
    <div className='game-container'>
      <div className='header-container'>
        <h1>Who is cuter?</h1>
      </div>
      { imageCount < 7 && <div className='quiz-container'>
      <div className='poloriod-card'>
        { catPicture && <img src={ catPicture.url } alt={ `Super cute ${catPicture.type}` } className='cat-image' onClick={ (e) => handleChange(e, catPicture) } /> }
      </div>
      <div className='or-div'>
        <p>or</p>
      </div>
      <div className='poloriod-card dog'>
        { dogPicture && <img src={ dogPicture.url } alt={ `Super cute ${ dogPicture.type}` } className='dog-image' onClick={ (e) => handleChange(e, dogPicture) } /> }
      </div>
    </div> }
    { imageCount === 7 && <Redirect to='/results' /> }
    </div>
  )
}

export default Game;

Game.propTypes = {
  animalChoice: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  dogPicture: PropTypes.object.isRequired,
  catPicture: PropTypes.object.isRequired,
  imageCount: PropTypes.number.isRequired
}
