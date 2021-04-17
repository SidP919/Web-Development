//require express
const express = require('express');
const app = express();

//Root Route
app.get('/',(req, res) => {
    res.send("This is root Route.");
});

// in below code, subreddit passed in the path is a path-parameter
// so we can enter any of the below addresses:
// localhost:8080/r/oranges, localhost:8080/r/orang, localhost:8080/r/apple
// here, oranges, orang, apple will be values of path-param "subreddit"
// the value of path-param can be accessed using req.params as shown below:
app.get('/r/:subreddit', (req,res) => {
    const { subreddit } = req.params;
    res.send(`This is ${subreddit} Subreddit.`);
});

// setup server to run at port 8080
app.listen(8080, ()=>{
    console.log('Server running at port 8080');
});