const express = require('express');
const app = express();
const path = require('path');


// //get seed function from seed.js(but seed function
// // is executed only once, when the DB is completely empty,
// // after that we comment the below line):- 
// const seedDB = require('./seed');

//mongoose is used to utilize mongodb in the project
const mongoose = require('mongoose');

//set ejs as the view engine
app.set('view engine','ejs');
//specify the path of the views folder as a good practice
app.set('views', path.join(__dirname,'/views'));

// to access static resources(i.e. js & css 
// files inside public folder), we use below middleware:
app.use(express.static(path.join(__dirname,'/public')));

// to process the req.body while processing the POST
// request, we use below middleware:
app.use(express.urlencoded({extended:true}));

// To send a PATCH request, we will need to
// override the POST method using 
// method-override npm package and 
// below written middleware:
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

//import Blog Model from models/blog.js:
const Blog = require('./models/blog');

//make a connection to mongodb
mongoose.connect('mongodb://localhost/bloggingWebApp', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify:false
    })
.then(()=>{
    console.log('MongoDB Connected.')
})
.catch(err=>{
    console.log('MongoDB Connection error')
    console.log(err);
});

//For BlogSchema and Blog Model for our bloggingWebApp:
// check Assignment_08/models/blog.js



// //execute seed function from seed.js here in
// //index.js but we only execute it for
// //the first time when we
// //run index.js, after first time
// //comment the below line of code once the DB is seeded:
// seedDB();

// For Blog related route, check ./routes/blog_route.js
//
// import blog routes from blog_route.js:-
const blogRoutes = require('./routes/blog_route');
app.use(blogRoutes);


app.listen(3000,()=>{
    console.log('Server running at port 3000...');
});