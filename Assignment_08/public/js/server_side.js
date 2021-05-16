const serverSideValidate = (blog) =>{

    if(blog.blogTitle === ''){
        return null;
    }
    if(blog.blogImage === ''){
        blog.blogImage = "https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fGJsb2d8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60";
    }
    if(blog.blogAuthor === ''){
        blog.blogAuthor = "Anonymous";
    }
    if(blog.blogContent === ''){
        blog.blogContent = "This is the default content for a Blog. It implies that its author hasn't added any content to this blog.";
    }
    return blog;
}

module.exports.validateForm = serverSideValidate;