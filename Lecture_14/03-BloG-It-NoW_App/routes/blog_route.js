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

//"Add the new blog to db" using below POST route:
router.post('/blogs', async(req, res)=>{
    const blog = req.body;
    if(blog.blogImage === ''){
        blog.blogImage = "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    }
    await Blog.create(blog);
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
    const updatedBlog = req.body;
    
    //find Blog with the id and replace it with updatedBlog:
    await Blog.findByIdAndUpdate(id, updatedBlog);
    
    res.redirect(`/blogs/${id}`);
});

//"Delete the current Blog from DB" using below DELETE Route:
router.delete('/blogs/:id', async(req,res)=>{
    const {id} = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');
});

//privacy policy
router.get('/privacy_policy', (req,res)=>{
    res.render('privacy_policy');
});

//terms and conditions
router.get('/terms_and_conditions', (req,res)=>{
    res.render('terms_and_conditions');
});

// export all the Blog related routes:-
module.exports = router;