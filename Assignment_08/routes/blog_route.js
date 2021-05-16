const express = require('express');
const router = express.Router();
const Blog = require('./../models/blog');

//Home route:
router.get('/blogs', async(req,res)=>{
    const blogsArr = await Blog.find({});
    res.render('index',{blogs:blogsArr});
});

//redirect to home route:
router.get('/', (req,res)=>{
    res.redirect('/blogs');
});

//Go to "create new blog form" using below GET route:
router.get('/blogs/new', (req,res)=>{
    res.render('new');
});

//Before we create a new blog or be able to edit any blog,
//We need to validate the form filled by user and
//only if it passes all criterion, we allow the submission:
const { validateForm } = require('../public/js/server_side');

//"Add the new blog to db" using below POST route:
router.post('/blogs', async(req, res)=>{
    const blog = req.body.blog;
    const validatedBlog = validateForm(blog);

    if(validatedBlog !== null){
        //Create a new Blog with validatedBlog object:
        await Blog.create(validatedBlog);
    }

    res.redirect('/blogs');
});

//"Show more details about a blog" using below GET route:
router.get('/blogs/:id', async(req,res)=>{
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('show',{Blog:blog});
});

// "Show Edit Blog form" using below GET route:
router.get('/blogs/:id/edit', async(req,res)=>{
    const { id } = req.params;
    const blog = await Blog.findById(id);
    res.render('edit',{blog});
});

//"Update the edited blog in DB" using below PATCH route:
router.patch('/blogs/:id', async(req,res)=>{
    const { id } = req.params;
    const updatedBlog = req.body.updatedBlog;
    const validatedBlog = validateForm(updatedBlog);
    
    if(validatedBlog !== null){
        //find Blog with the id and replace it with updatedBlog:
        await Blog.findByIdAndUpdate(id, validatedBlog);
    }
    
    res.redirect(`/blogs/${id}`);
});

//"Delete the current Blog from DB" using below DELETE Route:
router.delete('/blogs/:id', async(req,res)=>{
    const {id} = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');
});

// export all the Blog related routes:-
module.exports = router;