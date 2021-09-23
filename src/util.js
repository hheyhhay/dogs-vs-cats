export const organizeCat = (apiData) => {
  const simplifyData = {}
  apiData.forEach(data => {
    simplifyData.id = data.id;
    simplifyData.url = data.url
    simplifyData.type = 'cat'
  })

  return simplifyData;
}

export const organizeDog = (apiData) => {

  const simplifyData = {};
  simplifyData.id = Date.now();
  simplifyData.url = apiData.message;
  simplifyData.type = 'dog';

  return simplifyData
}
