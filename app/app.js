//Development script...
// "scripts": {
//   "start": "nodemon -e css,ejs,js,json --watch app"
// },

//<------------------Import the express library ---------------------->
//<------------------------------------------------------------------->
var express = require('express');
var reload = require('reload');
var app = express();

//<-----------------Save Variables for Global------------------------->
//<------------------------------------------------------------------->
//Create flexible port value depending on environment and set default to 3000....
app.set('port', process.env.PORT || 3000);

//Define the view engine as Embedded JavaScript
app.set('view engine', 'ejs');

//Define the location of views which allows routes to have access to views
app.set('views', 'app/views');

//Creates Tab Title to display across entire application...
app.locals.siteTitle = 'KBrooks Profile';

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

//<----------------- Auto Refresh Server and Browser ----------------->
//<------------------------------------------------------------------->
reload(server, app);
