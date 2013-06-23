
var articles = [
  {
    'name': 'Test name',
    'slug': 'sluggity',
    toString: function() { return 'Name: ' + this.name + ' - Slug: ' + this.slug }
  },
  {
    'name': 'Test another',
    'slug': 'slugworth',
    toString: function() { return 'Name: ' + this.name + ' - Slug: ' + this.slug }
  },
  {
    'name': 'What a lot of test',
    'slug': 'slugman',
    toString: function() { return 'Name: ' + this.name + ' - Slug: ' + this.slug }
  },
  {
    'name': 'Speaking of testing',
    'slug': 'slugboy',
    toString: function() { return 'Name: ' + this.name + ' - Slug: ' + this.slug }
  }
];

exports.new = function() {
  console.log('new article');
};

exports.view = function(slug) {
  console.log('view article: ' + slug ? slug : '');
  if (slug) {
    return articles[0];
  } else {
    return articles;
  }
};


exports.create = function(Article) {
  
};

exports.update = function(Article) {
  
};

exports.delete = function(slug) {
  
};
