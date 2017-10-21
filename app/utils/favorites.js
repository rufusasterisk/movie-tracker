export const buildFetchPayload = body => ({
  body: JSON.stringify(body),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'POST'
});

export const addToFavorites = fetchPayloadBody => {
  fetch(`http://localhost:3000/api/users/favorites/new`, buildFetchPayload(fetchPayloadBody))
    .then(response => console.log('response in fave util: ', response))
    // .then(parsedData => console.log(parsedData))
    // .then(parsedData => {
    //   dispatch(addToFavorites(parsedData))
    // })
}
