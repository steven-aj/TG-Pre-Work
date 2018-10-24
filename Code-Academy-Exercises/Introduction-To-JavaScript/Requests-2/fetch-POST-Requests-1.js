// Sends the request
fetch('http://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({id: '200')})
}).then(response => {
  //converts response object to JSON
  if (response.ok) {
    return response.json();
  }
  // handles errors
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
//handles success
).then(jsonResponse => {
  // code to execute with response
});
