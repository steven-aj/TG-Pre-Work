// Create a new object
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';

// Handle response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // executed with response
  }
}

// Open request & send object
xhr.open('GET', url);
xhr.send();
