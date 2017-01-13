var express = require("express");
var app = express();
var PORT = process.env.NODE_PORT || 3000;

app.use('/', express.static('public'));














app.listen(PORT,function(){
	console.log("Server running on port: "+ PORT);
});

