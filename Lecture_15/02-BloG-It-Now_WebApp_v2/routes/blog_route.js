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
    //get all reviews
    const reviewsArr = [];
    if(blog.blogReviews.length > 0)
    for(let reviewId of blog.blogReviews){
        reviewsArr.push(await Review.findById(reviewId));
    }
    res.render('show',{Blog:blog, Reviews:reviewsArr});
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


// Review_Routes:
//// import Review Model from models folder:
const Review = require('./../models/reviews');

//// below is the POST route to post a comment:
router.post('/blogs/:id/review', async(req,res)=>{
    const id = req.params.id;
    const review = new Review(req.body.review);
    if(review.reviewAuthor === undefined || review.reviewAuthor === ''){
        review.reviewAuthor = "Anonymous"; //default reviewer name is Anonymous
    }
    
    //get current blog and push the review into its blogReviews Array:
    const blog = await Blog.findById(id);
    blog.blogReviews.push(review);

    //save the review to Reviews collection:
    await review.save();
    //save the blog with its updated Reviews array:
    await blog.save();

    //refresh the current blog page:
    res.redirect(`/blogs/${id}`);
});

// below is the route to view all comments:
router.get('/blogs/:id/see_all_comments', async(req,res)=>{

    const { id } = req.params;
    const blog = await Blog.findById(id);
    //get all reviews
    const reviewsArr = [];
    if(blog.blogReviews.length > 0)
    for(let reviewId of blog.blogReviews){
        reviewsArr.push(await Review.findById(reviewId));
    }
    res.render('see_all_comments', {Blog:blog, Reviews:reviewsArr});

});


// export all the Blog related routes:-
module.exports = router;