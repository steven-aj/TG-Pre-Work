async function getData() {
  try {
    //sends request
    const response = await fetch('https://api-to-call.com/endpoint', {
      method: 'POST',
      body: JSON.stringify({id: '200'})
    });
    //handles response if successful
    if (response.ok) {
      const jsonResponse = await response.json();
      // to execute with response
    }
    //handles response if unsuccessful
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }
}
