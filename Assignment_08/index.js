const express = require('express');
const app = express();
const path = require('path');

// //get seed function from seed.js(but only
// //during the first execution of seed function)
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

//make a connection to mongodb
mongoose.connect('mongodb://localhost/bloggingWebApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('MongoDB Connected.')
})
.catch(err=>{
    console.log('MongoDB Connection error')
    console.log(err);
});

//For defining the MongoDB Schema for our bloggingWebApp:
const blogSchema = new mongoose.Schema({
    blogTitle:{
        type:String,
        required: true,
        maxlength: 100
    },
    blogAuthor:{
        type:String,
        required:true,
        maxlength: 30
    },
    blogPublishDate:{
        type: Date, 
        default: Date.now
    },
    blogImage:{
        type:String,
        required:true,
        default: "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    blogContent:{
        type:String,
        required:true
    }
});

//Create a Model Blog for our blogs
const Blog = mongoose.model('Blogs', blogSchema);

// //execute seed function from seed.js here in
// //index.js but we only execute it for
// //the first time when we
// //run index.js, after first time
// //comment the below line of code once the DB is seeded:
// seedDB();

//Home route
app.get('/blogs', async(req,res)=>{
    const blogsArr = await Blog.find({});
    res.render('index',{blogs:blogsArr});
});

//redirect to home route
app.get('/', (req,res)=>{
    res.redirect('/blogs');
});

//Go to "create new blog form" route
app.get('/blogs/new', (req,res)=>{
    res.render('new');
});

//"Add the new blog to db" using below POST route:
app.post('/blogs', async(req, res)=>{
    const blog = req.body;
    if(blog.blogImage === ''){
        blog.blogImage = "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    }
    await Blog.create(blog);
    res.redirect('/blogs');
});

//"Show more details about a blog" route:
app.get('/blogs/:id', async(req,res)=>{
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('show',{Blog:blog});
});












//privacy policy
app.get('/privacy_policy', (req,res)=>{
    res.render('privacy_policy');
});

//terms and conditions
app.get('/terms_and_conditions', (req,res)=>{
    res.render('terms_and_conditions');
});

app.listen(3000,()=>{
    console.log('Server running at port 3000...');
});