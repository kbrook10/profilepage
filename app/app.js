//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var app = express();

//<-----------------Server Port Establishment------------------------->
//<------------------------------------------------------------------->
//Create flexible port value depending on environment and set default to 3000....
app.set('port', process.env.PORT || 3000);

//<------------------ Create Index Route ----------------------------->
//<------------------------------------------------------------------->
app.get('/', function(req, res) {
    res.send(`
        <h1>Welcome to the Profile Page</h1>
        `);
});


//<-----------------Server to Listen in on Connections---------------->
//<------------------------------------------------------------------->
//Create process for the server to listen for connections on a specified port...
var server = app.listen(app.get('port'), function() {
    console.log('Listening in on port ' + app.get('port'));
});
