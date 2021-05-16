const express = require('express');
const router = express.Router();

//About
router.get('/about', (req,res)=>{
    res.render('about');
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