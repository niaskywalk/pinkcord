var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({
	'title': String,
	'body': String,
	'created': Date,
	'updated': Date,
	'rating': Number,
	'featuredImages': Array,
	'author': String,
	'slug': String
});

mongoose.model('Post', postSchema);