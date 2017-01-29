var express = require('express');
var mongoose = require('mongoose');
var router = new express.Router();
var Post = mongoose.model('Post');

router.get('/', function(req, res, next){
	Post.find({}, function(err, data){
		if (err) return next(err);
		res.json(data);
	});
});

router.get('/new-post',function(req, res){
	res.render('posts/new-post');
});

router.post('/new-post', function(req,res, next){
	var post = new Post(req.body);
	post.save(function(err,data){
		if (err) return next(err);
		res.redirect('/posts');
	});

});

module.exports = router;