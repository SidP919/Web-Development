const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// req.body in a POST request will be undefined by
// by default and won't contain the request/form data
// unless we tell the express to parse the req.body 
// also while processing the request by writing 
// below mentioned two lines:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/', (req,res)=>{
    res.render('form');
});

// GET request:
// ============
// It is used to retrieve data
// Info about requested Data is sent via request.query
// Info sent is visible in URL in string format
app.get('/user', (req,res)=>{
    const { username, age} = req.query;
    res.send(`Hello from ${username}, I'm ${age} years old.`);
});

// POST request:
// =============
// It is used to post data to the server.
// Usually used to Create/Write/Update/Delete
// Data is sent via request.body
// Data sent can be of different formats
app.post('/user', (req,res)=>{
    const { username, age} = req.body;
    res.send(`Hello from ${username}, I'm ${age} years old.`);
});

//Server setup
app.listen(3000, ()=>{
    console.log("Server running at port 3000...");
});