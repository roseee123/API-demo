'user strict';
var Article = require('../model/articleModel');

exports.list_all_articles = function(req, res) {
    Article.getAllArticle(function(err, article) {
        console.log('controller');
        if (err) {
            res.send(err);
            console.log('res', article);
        }
        res.send(article);
    });
};

exports.create_a_article = function(req, res) {
    var new_article = new Article(req.body);
    if (!new_article.title || !new_article.contents) {
        res.status(400).send({ error: true, message: 'please provide title/contents'});
    } else {
        Article.createArticle(new_article, function(err, article) {
            if (err) res.send(err);
            res.json(article);
        });
    }
};

exports.read_a_article = function(req, res) {
    Article.getArticleById(req.params.id, function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
};
  
exports.update_a_article = function(req, res) {
    Article.updateArticleById(req.params.id, new Article(req.body), function(err, article) {
      if (err)
        res.send(err);
      res.json(article);
    });
};
  
exports.delete_a_article = function(req, res) {  
    Article.remove( req.params.id, function(err, article) {
      if (err)
        res.send(err);
      res.json({ message: 'Article successfully deleted' });
    });
};