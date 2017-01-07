//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->

//Contact Route
router.get('/contact', function(req, res) {
    res.send(`
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel='stylesheet' type='text/css' href='/css/style.css'>
        <h1>Welcome to Contact Page</h1>
        <img src='/img/misc/keith_brooks_about_me@2x.png' alt='Image of me during a trip to the UAE' />
        <p>This page will provide how to get in touch with me</p>
        <script src="/reload/reload.js"></script>      
        `);
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
