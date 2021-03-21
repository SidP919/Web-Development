//Logs---------------------------------------------------------------------->
console.log("normal log");
console.dir("dir log");
console.warn("warning log");
console.error("error log");

console.log('\n\n');

//declaring variables------------------------------------------------------->
var x = 6;
let y = 'abc';
const z = [2, 3, 4];
console.log('Code: \nvar x = 6;\nlet y = "abc";\nconst z = [2, 3, 4];');
console.log('Output: \n x = ' + x + '\n y = ' + y + '\n z = ' + z);

console.log('\n\n');

//Sample program------------------------------------------------------------>
let a = "This is ", b = "JavaScript." , c = a + b;
console.log('Code: \nlet a = "This is ", b = "JavaScript." , c = a + b;');
console.log('Output: ' + c.length + '\nc = ' + c);

console.log('\n\n');

// String Template Literals-------------------------------------------------->
let firstName = "Sidharth";
let lastName = "Pandey";
let fullName = `My full name is ${firstName} ${lastName}`;
console.log(fullName);
console.log(`Mr.${lastName},${firstName}`);
// Output:
// My full name is Sidharth Pandey
// Mr.Pandey,Sidharth

console.log('\n\n');

//Number values--------------------------------------------------------------->
console.log(Number.MAX_SAFE_INTEGER);
//output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER);
//output: -9007199254740991

console.log('\n\n');
