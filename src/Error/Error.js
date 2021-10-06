import React from 'react';
import './Error.css';
import errorImage from './error-image.jpg';
import PropTypes from 'prop-types';

const Error = ({ error }) => {
  return(
    <div className='error-container'>
      <p>Sorry, we can't find access the dogs and cats right now, try again later</p>
      <p className='error-message'>{ error }</p>
      <img className='error-picture' src={ errorImage } alt='Small dog looking at computer'/>
    </div>
  )
}

export default Error;

Error.propTypes = {
  error: PropTypes.string.isRequired
}
