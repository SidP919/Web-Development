const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({

    reviewAuthor:{
        type:String,
        required: true,
        default:"Anonymous"
    },
    reviewRating:{
        type:Number,
        required:true,
        min:0,
        max:5,
        default: 3
    },
    reviewComment:{
        type:String,
        required:true,
        default:"No Comments."
    }
});

const Review = mongoose.model('Reviews',reviewSchema);

module.exports = Review;