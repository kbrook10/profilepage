//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->

//Resume Route
router.get('/resume', function(req, res) {
    res.send(`
        <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
        <link rel='stylesheet' type='text/css' href='/css/style.css'>
        <h1>Welcome to Resume Page</h1>
        <img src='/img/misc/keith_brooks_about_me@2x.png' alt='Image of me during a trip to the UAE' />
        <p>This page will provide details of my work experience</p>
        `);
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
