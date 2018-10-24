async function getData() {
  try {
    const response = await fetch('https://api-to-call.com/endpoint');
    if (response.ok) {
      const jsonResponse = await response.json();
      // to exectue with response
    }
    throw new Error('Request Failed!');
  } catch (error) {
    console.log(error);
  }
}
