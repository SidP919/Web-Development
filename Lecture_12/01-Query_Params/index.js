const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('This is the Root Route.');
});


// Query-Parameters can be accessed using req.query
// And Query-Parameters can be specified in path of the URL
// in this way: localhost:3000/search?name=Sid
// now, res.query will contain one key-value pair,
// {name: Sid}
// you can also pass multiple query params using "&"
// ex: localhost:3000/search?name=Sid&age=24
// and use below to get the value for name & age variables:
// const { name, age } = req.query;
app.get('/search',(req, res) => {
    const { name } = req.query; //this will make const name = 'Sid'
    res.send(`This is a Search Page and you want to search for ${name}`);
});


app.listen(3000, () => {
    console.log('Server is running at port 3000...');
});