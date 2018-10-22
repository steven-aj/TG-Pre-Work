const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(
	animal => {
    return animal === 'elephant' ? animal : null;
  }
);
console.log(foundAnimal);

const startsWithS = animals.findIndex(
	animal => {
    return animal[0] === 's' ? animal : null;
  }
);
console.log(startsWithS);
