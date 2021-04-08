console.log("Ohh! so you are learning NodeJS, nice.");

function add(x, y){

    return x + y;

}

let b = add(6, 8);

console.log(b);

console.log(process.argv);

const arr = process.argv.slice(2);

for(let user of arr){
    console.log(`Hello from ${user}`);
}
