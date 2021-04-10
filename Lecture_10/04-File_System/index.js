// Creating/Editing/Reading a file with NodeJS:

// require the file system module:
const fs = require('fs');

// require the path module:
const path = require('path');

// mention the fileName with path:
const abc = path.join(__dirname, 'files', 'abc.txt'); //__dirname represents path to this file
//we can use path.join to combine the currentpath with files and abc.txt,
//it will make abc = 'currentPath/files/abc.txt'

// Data to be written in the file:
const data = "Hello from File System.";

// Creating/Editing the file:
fs.writeFile(abc, data, {
    encoding: 'utf-8',
    flag: 'w'
}, (err)=>{
    if(err){
        throw err;
    }
    console.log('File written successfully.');
});

// Reading from the File:
fs.readFile(abc, {
    encoding: 'utf-8',
    flag: 'r'
}, (err, content)=>{
    if(err){
        throw err;
    }
    console.log(`File Content: ${content}`);
})

