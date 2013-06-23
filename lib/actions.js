
exports.viewAllArticles = function(req, res) {
  res.send('articles');
};

exports.editArticle = function(req, res) {
  res.send('edit article form');
};

exports.viewArticle = function(req, res) {
  res.send('article of slug');
};

exports.createArticle = function(req, res) {
  res.send('edit an article of slug');
};

exports.updateArticle = function(req, res) {
  res.send('updating article of slug');
};

exports.deleteArticle = function(req, res) {
  res.send('delete article of slug');
};
