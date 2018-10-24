fetch('http://api-to-call.com/endpoint').then(response => {
  if(response.ok) {
    return response.json();
  }
  throw new Error('Request failed!');
}, networkError => console.log(networkError.message)
).then(jsonResponse => {
  // to be executed with response
});
