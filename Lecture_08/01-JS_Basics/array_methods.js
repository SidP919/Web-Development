//substring() method------------------------------------------------------------------------------------------>
console.log('substring method o/p:');
let str = 'Mozilla';
console.log(str.substring(1, 3));
// expected output: "oz"
console.log(str.substring(2));
// expected output: "zilla"








//indexOf() method-------------------------------------------------------------------------------------------->
console.log('\n indexOf() method o/p:');

let beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1
                   







//replace() method--------------------------------------------------------------------------------------->
console.log('\n replace method o/p:');

let p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"


let regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the dog reacted, was it really lazy?"








//replaceAll() method---------------------------------------------------------------------------------------->
console.log('\n replaceAll method o/p:');
                        
p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(p.replaceAll('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the monkey reacted, was it really lazy?"


// global flag required when calling replaceAll with regex
regex = /fox/ig;
console.log(p.replaceAll(regex, 'ferret'));
// expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"








//repeat() method----------------------------------------------------------------------------------------->
console.log('\n repeat method o/p:');

let chorus = 'Because I\'m happy. ';

console.log(`Chorus lyrics for "Happy": ${chorus.repeat(5)}`);

// expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. Because I'm happy. "








//slice() method------------------------------------------------------------------------------------------>
console.log('\n slice method o/p:');

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]






//splice() mehtod------------------------------------------------------------------------------------------>
console.log('\n splice method o/p:');

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]








//split() mehtod------------------------------------------------------------------------------------------>
console.log('\n split method o/p:');

const str1 = 'The quick brown fox jumps over the lazy dog.';

const words = str1.split(' ');
console.log(words[3]);
// expected output: "fox"

const chars = str1.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str1.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]






//join() mehtod------------------------------------------------------------------------------------------>
console.log('\n join method o/p:');

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

