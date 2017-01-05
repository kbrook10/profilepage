//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var app = express();

//<-----------------Server Port Establishment------------------------->
//<------------------------------------------------------------------->
//Create flexible port value depending on environment and set default to 3000....
app.set('port', process.env.PORT || 3000);

//<------------------ Create Public Folder for App ------------------->
//<------------------------------------------------------------------->
//This allows the application to store css, img and js files that can be accessed throughout the application...
app.use(express.static('app/public'));

//<------------------ Create Application Routes ---------------------->
//<------------------------------------------------------------------->
app.use(require('./routes/index'));
app.use(require('./routes/resume'));
app.use(require('./routes/contact'));


//Blog Route --> Need to just create a tag and link to new tab...https://medium.com/@kbrook10

//<-----------------Server to Listen in on Connections---------------->
//<------------------------------------------------------------------->
//Create process for the server to listen for connections on a specified port...
var server = app.listen(app.get('port'), function() {
    console.log('Listening in on port ' + app.get('port'));
});
