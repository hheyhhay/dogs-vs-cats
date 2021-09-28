export const fetchCatData = async () => {

  let response = await fetch('https://api.thecatapi.com/v1/images/search')

  if (response.status === 404) {
    throw new Error('404 error - Destination not found')
  } else if (response.status === 500) {
    throw new Error('500 error - Can\'t access pictures right now')
  }
  let cats = await response.json();

  return cats
};

export const fetchDogData = async () => {

  let response = await fetch('https://dog.ceo/api/breeds/image/random')

  if (response.status === 404) {
    throw new Error('404 error - Destination not found')
  } else if (response.status === 500) {
    throw new Error('500 error - Can\'t access pictures right now')
  }

  let dogs = await response.json();

  return dogs
};
