const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const { v4: uuid } = require('uuid');

// set ejs as the view engine so that 
// we can specify that we are going to 
// use ejs templates
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));

// To send a PATCH request, we will need to
// override the POST method using 
// method-override npm package and 
// below written middleware:
app.use(methodOverride('_method'));
// Now, in the edit form file(edit_comment.ejs),
// mention the value of method attribute 
// as GET or POST and in the action attribute's 
// value, add the required Request(PATCH or DELETE or
// other requests) like this: action="comments/id?_method=DELETE"
// See the below form tag from edit_comment.ejs as below:
// <form action="/comments/<%= comment.id %>?_method=PATCH" method="POST">


// req.body in a POST request will be undefined by
// by default and won't contain the request/form data
// unless we tell the express to parse the req.body 
// also while processing the request by writing 
// below mentioned two lines:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Since don't have a DB setup to store comments
// we will use below comment objects as seed data:
const comments = [
    {
        id: uuid(),
        username:"Sidharth",
        body: "This is a comment."
    },
    {
        id: uuid(),
        username:"Dog",
        body: "Woof Woof"
    },
    {
        id: uuid(),
        username:"Cat",
        body: "Meeooowwww..."
    },
];

//Route for displaying all comments:
app.get('/comments', (req,res)=>{
    res.render('comments/index',{Comments:comments});
});

//Route for displaying all comments:
app.get('/', (req,res)=>{
    res.redirect('comments');
});

//Route for displaying a form to create a new comment:
app.get('/comments/new', (req,res)=>{
    res.render('comments/new_comment');
});

// Route to add the new comment 
// when we click on submit button on Route /comments/new
app.post('/comments', (req,res)=>{ // POST request
    const {username, body } = req.body;
    const id = uuid();
    comments.push({id, username, body});
    res.redirect('/comments');
});

// Show particular comment:
app.get('/comments/:id', (req,res) => {
    const { id } = req.params;
    const selectedComment = comments.find(c=>c.id === id);//get selected comment
    res.render('comments/show_comment',{comment:selectedComment});
});

// Show Edit form to edit the comment:
app.get('/comments/:id/edit',(req,res)=>{
    const { id } = req.params;
    const selectedComment = comments.find(c=>c.id===id);
    res.render('comments/edit_comment',{comment:selectedComment});
})

// Update the Comment when we
// click the submit button on /comments/:id/edit route:
app.patch('/comments/:id',(req,res)=>{
    const { id } = req.params;
    let selectedComment = comments.find(c=>c.id===id);
    const updatedCommentBody = req.body.body;
    selectedComment.body = updatedCommentBody;
    res.redirect('/comments');
})

//Delete a particular comment:
app.delete('/comments/:id',(req,res)=>{
    const { id } = req.params;
    let selectedComment = comments.find(c=>c.id===id);
    let indexOfSelectedComment = comments.indexOf(selectedComment);
    //remove 1 element at indexOfSelectedComment i.e. delete selectedComment
    comments.splice(indexOfSelectedComment,1);
    res.redirect('/comments');
})

// Server Setup:
app.listen(3000, ()=>{
    console.log('Server running at port 3000...');
});