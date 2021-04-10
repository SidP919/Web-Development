const cat = require('./cat');
const dog = require('./dog');

// console.log(cat);    //contains cat function reference
// console.log(dog);    //contains dog function reference
// console.log(cat.cat());  //calls cat function
// console.log(dog.dog());  //calls dog function

const animals = {
    animalCat: cat,
    animalDog: dog
}

module.exports = animals;