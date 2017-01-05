//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->

//Contact Route
router.get('/contact', function(req, res) {
    res.send(`
        <h1>Welcome to Contact Page</h1>
        <p>This page will provide how to get in touch with me</p>
        `);
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
