
var express = require('express');
var app = module.exports = express();

app.get('/blog', function(req, res) {
	res.send('blog');
});

