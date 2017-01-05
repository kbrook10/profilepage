//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->
//Root Route
router.get('/', function(req, res) {
    res.send(`
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel='stylesheet' type='text/css' href='/css/style.css'>
        <h1>Welcome to Home Page</h1>
        <img src='/img/misc/featured_image@2x.png' alt='Image of books, a computer and a rubber duck to remind me to explain myself when coding...' style='height: 300px;' />
        <p>This page will provide a glimpse of who I am</p>
        `);
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
