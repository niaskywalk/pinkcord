require('./db');
var express = require("express");
var app = express();
var ejsmate = require('ejs-mate');
var bodyParser = require('body-parser');
var PORT = process.env.NODE_PORT || 3000;

app.set('view engine','ejs');
app.set('views','./views');
app.engine('ejs', ejsmate);

require('./models');
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static('public'));

require('./routes')(app);

app.get('/home',function(req,res){
	return res.send("<h1>This is home</h1>");
});

app.get('/',function(req,res){
	res.render('index');
});








app.get('*',function(req,res){
	res.locals.path = req.path;
	return res.status(404).render('404');
});

app.use(function(err,req,res,next){
	if (app.get('env')==='development') {
		res.locals.err = err;
		return res.status(500).render('500-dev');
	} else {
		return res.status(500).render('500');
	}
});

app.listen(PORT,function(){
	console.log("Server running on port: "+ PORT);
});

