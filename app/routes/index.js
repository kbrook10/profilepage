//<------------------Development Notes to Consider ------------------->
//<------------------------------------------------------------------->
// TODO: Change the package.json scripts>start back to node app/app.js when deploying to production...


//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var router = express.Router();


//<------------------------ Define Route ----------------------------->
//<------------------------------------------------------------------->
//Root Route
router.get('/', function(req, res) {
    res.render('index', {
        pageTitle: 'Home',
        pageID: 'home',
    });
});

//<------------------------ Export Route ----------------------------->
//<------------------------------------------------------------------->
module.exports = router;
