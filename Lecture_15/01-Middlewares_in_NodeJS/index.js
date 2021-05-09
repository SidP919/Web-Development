const express = require('express');
const app = express();

//Middlewares-Example-01:
//01:
app.use((req, res,next) => {
    req.name = "Sidharth";
    console.log("My First Middle ware");
    next();
    console.log("This is first middleware after calling NEXT()")
});
//02:
app.use((req, res,next) => {
    req.name = req.name+" Pandey";
    console.log("My Second Middle ware");
    return next();
    //below line won't run if you use "return next();"
    console.log("This is my second middle ware after next()")
});
//03:
app.use('/full',(req, res, next) => {
    console.log("This is the middleware at path /cats");
    res.send("Full Name Route");
    console.log(req.name); // this will print "Sidharth Pandey"
    next();
});

//Home Route:
app.get('/', (req, res) => {
 
    res.send("THIS IS THE HOME PAGE");
});








//Middleware-Example-02:
//01:
const verify = (req,res,next) => {
    
    const { pwd } = req.query;

    if (pwd === 'asdfjkl') {
        next();
    }
    else
        res.send("INVALID PASSWORD!!");
};

//02:
app.get('/secret',verify,(req, res) => {
    
    res.send("MY SECRET IS : It's a Secret for a reason! LOL");
});

//03: 
// If you open in browser: http://localhost:3000/secret?pwd=asdfjkl
// output: MY SECRET IS : It's a Secret for a reason! LOL
//
// But, if you open in browser: http://localhost:3000/secret?pwd=wrongPwd
// output: INVALID PASSWORD!!





//Server setup:
app.listen(3000, () => {
    console.log("Server running at port 3000");
})