
var ArticleController = require("./articles");

exports.viewAllArticles = function(req, res) {
  // ask the article controller for all articles
  var articles = ArticleController.view();

  res.send('articles: ' + articles);
};

exports.viewArticle = function(req, res) {
  var slug = req.params.slug,
      article = ArticleController.view(slug);

  res.send('article of slug: ' + slug + ' - ' + article);
};

exports.editArticle = function(req, res) {
  var article;

  if( req.params.slug ) {
    article = ArticleController.view(slug);
  } else {
    article = ArticleController.new();
  }

  res.send('edit article form: ' + article);
};

exports.createArticle = function(req, res) {
  try {
    ArticleController.create();
  }
  catch(e) {
    // failed to save
  }
  res.send('create an article');
};

exports.updateArticle = function(req, res) {
  var slug = req.params.slug;

  ArticleController.update(req.params);
  res.send('updating article of slug: ' + slug);
};

exports.deleteArticle = function(req, res) {
  var slug = req.params.slug;

  ArticleController.delete(slug);

  res.send('delete article of slug: ' + slug);
};
