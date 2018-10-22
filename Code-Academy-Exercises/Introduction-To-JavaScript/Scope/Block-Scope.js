function logVisibleLightWaves() {
  const lightWaves = 'Moonlight';

  console.log(lightWaves);
}

logVisibleLightWaves();


/*
console.log(lightWaves); -- will break!

lightWaves does not exist beyond scope
of logVisibleLightWaves()
*/
