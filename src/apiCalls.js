const catURL = 'https://api.thecatapi.com/v1/images/search';
const dogURL = 'https://dog.ceo/api/breeds/image/random'


export const fetchData = (species) => {

  let targetURL = "";

  if (species === "cat" ) {
    targetURL = catURL
  }
  if (species === "dog" ) {
    targetURL = dogURL
  }

 return fetch(targetURL)
    .then(res => {
      if (res.status === 404) {
        throw new Error('404 error - Destination not found')
      } else if (res.status === 500) {
        throw new Error('500 error - Can\'t access pictures right now')
      }
      return res.json()
    })
};
