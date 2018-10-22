let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
function greenEnergy(vehicle) {
	vehicle['Fuel Type'] = 'avocado oil';
};

function remotelyDisable(vehicle) {
  vehicle['disabled'] = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship);
