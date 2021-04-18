const express = require('express');
const app = express();
const path = require('path');

app.get('/',(req, res) => {
    res.send('This is Root Route.');
});

// For Templating, we are using ejs here as the view engine
app.set('view engine', 'ejs');
// Always setup the path for views directory in __dirname( = this directory)
app.set('views', path.join(__dirname,'/views'));

// we write below to make the public folder 
// available to use in home.ejs template
app.use(express.static('public'));

// Blog object
const blog = {
    name:'BlogName',
    img: 'https://image.shutterstock.com/image-photo/bloggingblog-concepts-ideas-white-worktable-260nw-1029506242.jpg',
    author: 'AuthorName',
    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam reiciendis iste quasi harum eveniet, inventore doloremque placeat. Itaque voluptatum, amet sunt officiis vel explicabo asperiores necessitatibus consequuntur quos veritatis tenetur!'
}

// ToDo list object
const todo = ['Go to Gym','Learn web','Buy Groceries','Go for a walk'];

// home route
app.get('/home', (req,res)=>{
    // render will use home.ejs to create the web page
    // and send "blog" and "todo" objects to home.ejs 
    // to be accessed using names "Blog" and "Todo"(see home.ejs)
    res.render('home', {Blog:blog, Todo:todo});
});

app.listen(3000, () => {
    console.log('Server running at port 3000...');
});