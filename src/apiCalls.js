export const fetchCatData = async () => {

  let response = await fetch('https://api.thecatapi.com/v1/images/search')

  if (!response.ok) {
    throw new Error('Sorry, we\'re having a hard time finding cats')
  }
  let cats = await response.json();

  return cats
}

export const fetchDogData = async () => {

  let response = await fetch('https://dog.ceo/api/breeds/image/random')

  if (!response.ok) {
    throw new Error('Sorry, we\'re having a hard time finding dogs')
  }
  let dogs = await response.json();

  return dogs
}
