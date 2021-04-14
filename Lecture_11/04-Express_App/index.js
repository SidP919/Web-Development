// import express for use
const express = require('express');
// express returns one function: express()
const app = express();
// console.log(app); // its output will be a js object.


// // "use" below is used as callback which is
// // always called when a request is made
// // to the server and it specifies the request 
// // and response as a JS object
// app.use(
//     (req,res)=> {
//         // console.log('You made a request:');
//         // console.log(req);
//         // console.log('Response: ');
//         // console.log(res);
//         res.send("<h1>Hello from the Server running at port 3000.</h1>")
//     }
// );


// with listen, we can get the server running 
// on any of the available ports and it 
// will listen and wait for any request or
// connection to be made to it.
app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
// Note: in case you run into an error like, port XXXX is already in use, 
// for windows only, do below:
// run command: netstat -a -o -n
// copy the pid of your port from the o/p
// now run command: taskkill /f /pid <pid number>

// In case you are wondering, 
// how to make a request 
// =====================
// to the server you just created above which is running
// at port 3000? Then, just go to your browser or in
// Postman app, and enter route's path on address bar
// and hit enter. 
// like root route: localhost:3000
// or, route for cats: localhost:3000/cats
// or, route for dogs: localhost:3000/dogs
// or, the default route: localhost:3000/abcdxyz
// do this and you will get appropriate response
// from the server.

// ROUTING ===> GET, POST requests

// "get" method routes HTTP GET requests to the Specified Path 
// with the Specified Callback Functions.
app.get('/',(req, res)=> {
    res.send('<h1>This is the root route.</h1>');
});

app.get('/cats', (req,res)=>{
    res.send("<h1>Meeooowwww. This is cats GET request route.</h1>");
});

app.get('/dogs', (req,res)=>{
    res.send("<h1>Woof Woof. This is dogs GET request route.</h1>");
});

app.get('*', (req,res)=>{ // default route
    res.send("<h1>This file doesn't exist, <br> or <br> Its an invalid file path.</h1>");
});

// "post" method routes HTTP POST requests to the 
// specified path with the specified callback functions.
app.post('/cats', (req,res)=>{ // cats POST route
    res.send("<h1>This Meeooowwww is from a POST request.</h1>");
});

