// Solving the same problem from 04-File_System in Lecture_10 with Promise:
// Please note using Promise is the recommended option over using callbacks.

// See the original problem statement and its solution with callbacks at: 
// https://sidp919.github.io/Web-Development/Lecture_10/04-File_System/index.html

const fs = require('fs');
const path = require('path');

const output = path.join(__dirname, "output.txt");
const input1 = path.join(__dirname, "input1.txt");
const input2 = path.join(__dirname, "input2.txt");

function readInput1(){
    return new Promise((resolve,reject) => {
        fs.readFile(input1,{
            encoding: 'utf-8',
            flag: 'r'
        }, (err,responseData) => {
            if(err){
                throw err;
            }
            resolve(responseData.split('\n'));
        })
    });
}

function readInput2(){
    return new Promise((resolve,reject) => {
        fs.readFile(input2,{
            encoding: 'utf-8',
            flag: 'r'
        }, (err,responseData) => {
            if(err){
                throw err;
            }
            resolve(responseData.split('\n'));
        })
    });
}

function writeOutput(outputData){
    return new Promise((resolve, reject) => {
        fs.writeFile(output, outputData, {
            encoding: 'utf-8',
            flag: 'w'
        }, err => {
            if(err){
                throw err;
            }
            console.log("\nOutput: \n" + outputData);
            resolve('Output generated successfully.');
        })
    });
}

let inputArr1;

readInput1()
.then(responseData => {
    inputArr1 = responseData;
    console.log("\nInput1: \n" + inputArr1);
    return readInput2();
})
.then(responseData => {
    let input2 = responseData;
    console.log("\nInput2: \n" + input2);
    return inputArr1.concat(input2);
})
.then(responseData => {
    console.log("\nCombined Input: \n" + responseData);
    return writeOutput(responseData.sort((a,b)=>(a-b)).join('\n'));
});