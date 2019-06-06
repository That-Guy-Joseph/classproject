var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
//declaaring and assigning variables and values
//require mongoose for MongoDB
var mongoose = require('mongoose');

var app = express();


//DB Config
var db = require('./config/keys').MongoURI;

//connect to Mongo
//connect to mongo using mongoose
mongoose.connect(db, {useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));
//reference/use public dir

app.use(express.static(path.join(__dirname, 'public')));
//view engine setup
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


//app.use(express.static(__dirname + '/public'));
//app.use('/public', express.static('public'));

/*var fs = require('fs');
var myCss = {
    style : fs.readFileSync('./style.css','utf8');
};

app.get('/', function(req, res){
  res.render('index.ejs', {
  title: 'My Site',
  myCss: myCss
 });
});*/


//0.TERMINAL: Install your dependencies
//CODE EDITOR: Dependencies are referenced by variables

 // include routes

var routes = require('./routes/index');
var users = require('./routes/user');
app.use('/user', user);  // please note the mounting point!
app.use('/', routes);

// listen on port 3000
app.listen(port, function () {
  console.log('Express app listening on port 3000');
});
