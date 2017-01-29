var mongoose = require("mongoose");

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/pinkcord');

mongoose.connection.on('connected', function(){
	console.log("Database connection successful");
});
mongoose.connection.on('error', function(err){
	console.log("Error connection to Database: " + err.message);
});
