//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->

//Resume Route
router.get('/resume', function(req, res) {
    res.send(`
        <h1>Welcome to Resume Page</h1>
        <p>This page will provide details of my work experience</p>
        `);
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
