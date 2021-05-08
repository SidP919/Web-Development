const mongoose = require('mongoose');

// Collection: It is equivalent of Table from SQL. 
// In below code, movieApp is a Collection.
// Document: It is equivalent of a row in a table in SQL. 
// Every entry in a collection is a document.
mongoose.connect('mongodb://localhost:27017/movieDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connection is Open...');
})
.catch(err=>{
    console.log('Connection Failure!!');
    console.log(err);
});

// Schema: Maps the different keys of a collection coming
// from db to different datatypes in JS.
const moviesSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        maxlength:30
        },
    year:{
        type:Number
    },
    score: {
        type:Number,
        min:0,
        max:10
        },
    isWatched:{
        type:Boolean,
        default:false
        },
});

//Model
const Movie = mongoose.model('Movie', moviesSchema);

// using the Movie model to create a Movie entry.
const ironman = new Movie({name:'Ironman', year:2010, score:7, isWatched: false});
// insert multiple entries:
// Movie.insertMany(
//     {name:'Movie01', year:2010, score:7, isWatched: false},
//     {name:'Movie02', year:2013, score:9, isWatched: true},
//     {name:'Movie03', year:2015, score:6, isWatched: false},
//     {name:'Movie04', year:2012, score:8, isWatched: false},
//     {name:'Movie05', year:2014, score:9, isWatched: true},
//     )
//     .then(()=>{
//         console.log('Inserted Movies data Successfully.')
//     })
//     .catch(err=>{
//         console.log('Insertion of Data has failed!!');
//         console.log(err);
//     });

// Get the movies whose name is 
// same as any of this array's elements: ['Movie03','Movie02']
// Query:
// Movie.find({name:{$in:['Movie03','Movie02']}}).then(m=>console.log(m))
// Output of above query will be below:
// {name:'Movie02', year:2013, score:9, isWatched: true},
// {name:'Movie03', year:2015, score:6, isWatched: false}

ironman.save();