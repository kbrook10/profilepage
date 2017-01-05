//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->
//Root Route
router.get('/', function(req, res) {
    res.send(`
        <h1>Welcome to Home Page</h1>
        <p>This page will provide a glimpse of who I am</p>
        `);
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
