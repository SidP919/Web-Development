const animals = require('./Animals');//requiring a directory called Animals

const { animalCat, animalDog } = animals;

console.log(animalCat.cat());
console.log(animalDog.dog());