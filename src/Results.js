import React, { useState, useEffect } from 'react';

import './Results.css'

const Results = ( {favoriteCats, favoriteDogs}) => {
  const [winner, setWinner] = useState('')
  const [images, setImages] = useState([])

  // let imageCards =[]

  const findWinner = () => {
    if(favoriteCats.length > favoriteDogs.length ) {
    let cards = displayImages(favoriteCats)
      console.log(cards)
      setImages([cards])
      setWinner('cats')
    } else {
      let cards = displayImages(favoriteDogs)
      setImages([cards])
      setWinner('dogs')
    }
  }

  useEffect(() => {
    findWinner()
  }, [])

  const displayImages = (images) => {
    console.log(images)
  let imageCards = images.map(image => {
    return(  <img src={image.url} className={`${image.type}-image`} />)
    })
    console.log('imageCards', imageCards)
    return imageCards;

  }
  return (
    <div>
    {winner === 'cats' && <div>{images}</div>}
    {winner === 'dogs' && <div>{images}</div>}
    </div>
  )
}

export default Results;
