const mongoose = require('mongoose');

//Blog Schema for Blog Model:
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

//Create a Blog Model for our blogs:
const Blog = mongoose.model('Blogs', blogSchema);

//export the Blog Model to be used in index.js:-
module.exports = Blog;