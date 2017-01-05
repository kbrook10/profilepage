//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var app = express();

//<-----------------Server Port Establishment------------------------->
//<------------------------------------------------------------------->
//Create flexible port value depending on environment and set default to 3000....
app.set('port', process.env.PORT || 3000);

//<------------------ Create Application Routes ---------------------->
//<------------------------------------------------------------------->

//Root Route
app.get('/', function(req, res) {
    res.send(`
        <h1>Welcome to Home Page</h1>
        <p>This page will provide a glimpse of who I am</p>
        `);
});

//Blog Route --> This does not work...Need to just create a tag and link to new tab...
// app.get('/blog', function(req, res) {
//     res.send(`https://medium.com/@kbrook10
//         `);
// });

//Resume Route
app.get('/resume', function(req, res) {
    res.send(`
        <h1>Welcome to Resume Page</h1>
        <p>This page will provide details of my work experience</p>
        `);
});

//Contact Route
app.get('/contact', function(req, res) {
    res.send(`
        <h1>Welcome to Contact Page</h1>
        <p>This page will provide how to get in touch with me</p>
        `);
});

//<-----------------Server to Listen in on Connections---------------->
//<------------------------------------------------------------------->
//Create process for the server to listen for connections on a specified port...
var server = app.listen(app.get('port'), function() {
    console.log('Listening in on port ' + app.get('port'));
});
