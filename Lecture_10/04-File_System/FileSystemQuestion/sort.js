const fs = require('fs');
const path = require('path');

const output = path.join(__dirname, 'output.txt');
const input1 = path.join(__dirname,"input1.txt");
const input2 = path.join(__dirname,"input2.txt");

const outputData = "";

fs.readFile(input1,{
    encoding: 'utf-8',
    flag: 'r'
}, (err, readData) =>{
    if(err){
        throw err;
    }
    console.log('Input1: \n' + readData);

    const arr1 = readData.split('\n');
    
    fs.readFile(input2,{
        encoding: 'utf-8',
        flag: 'r'
    }, (err, readData2) =>{
        if(err){
            throw err;
        }
        console.log('\nInput2: \n' + readData2);

        const arr2 = readData2.split('\n');

        let outputData = arr1.concat(arr2);

        outputData.sort((a,b)=>(a-b));

        outputData = outputData.join('\n');
    
        console.log('\nCombined Sorted Array: \n' + outputData);

        fs.writeFile(output, outputData,{
            encoding: 'utf-8',
            flag: 'w'
        }, err =>{
            if(err){
                throw err;
            }
            console.log("Output got generated successfully.");
        });
    });
});
