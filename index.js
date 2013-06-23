
var express = require('express');
var app = module.exports = express();

// get list of all articles
app.get('/articles', function(req, res) {
  res.send('articles');
});

// view an article with the specified slug
app.get('/articles/:slug', function(req, res) {
  res.send('article of slug');
});

// edit an article with the specified slug
app.get('/articles/:slug/edit', function(req, res) {
  res.send('edit an article of slug');
});

// create a new article
app.post('/articles', function(req, res) {
  res.send('creating new article');
});

// update an existing article with the specified slug
app.put('/articles/:slug', function(req, res) {
  res.send('updating article of slug');
});

// view a form to create a new article
app.get('/articles/new', function(req, res) {
  res.send('create new article form');
});

// delete an article with the specified slug
app.delete('/articles/:slug', function(req, res) {
  res.send('delete article of slug');
});

app.listen(3000);
