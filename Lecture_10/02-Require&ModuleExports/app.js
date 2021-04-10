const math = require('./Math');

console.log(math.square(19));
console.log(math.add(19, 19));
console.log(math.PI);

//Destructuring an object
const person = {
    name: "Sid",
    age: 25,
    email: "asdf@xyz.com"
}
const { name, age, email } = person;
console.log(`Hi, I\'m ${name}, I\'m ${age} years old. My Email id is ${email}`);
 