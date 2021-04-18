const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.set('views',path.join(__dirname, 'views'));

const arr = ['abc', 'def', 'ghi', 'jkl'];

app.get('/',(req,res)=>{
    res.render('home',{HomeArray: arr});
});

app.get('/r/:subreddit', (req,res)=>{ 
    const {subreddit} = req.params;
    res.render('subreddit',{SubR:subreddit, SubredditArray:arr});
});

app.listen(8080,()=>{
    console.log('Server running at port 8080...');
});