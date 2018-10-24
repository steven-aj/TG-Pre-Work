// create a new object
const xhr = new XMLHttpRequest();
const url = 'http://api-to-call.com/endpoint';
const data = JSON.stringify({id: '200'}); // converts data to stringify

// handles response
xhr.responseType = 'json';
xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    // executes with response
  }
}

// opens request & sends object
xhr.open('POST', url); // 'POST' instead of 'GET'
xhr.send(data);
