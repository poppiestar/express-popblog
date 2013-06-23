
var express = require('express');
var app = module.exports = express();

var actions = require("./lib/actions");

app.get('/articles', actions.viewAllArticles);        // get list of all articles
app.get('/articles/new', actions.editArticle);        // view a form to create a new article
app.get('/articles/:slug', actions.viewArticle);      // view an article with the specified slug
app.get('/articles/:slug/edit', actions.editArticle); // edit an article with the specified slug

app.post('/articles', actions.createArticle);         // create a new article

app.put('/articles/:slug', actions.updateArticle);    // update an existing article with the specified slug

app.delete('/articles/:slug', actions.deleteArticle); // delete an article with the specified slug

app.listen(3000);
