var express= require('express');
var router = express.Router();
var article = require('../controller/articleController');

router.route('/articles')
.get(article.list_all_articles)
.post(article.create_a_article);

router.route('/articles/:id')
.get(article.read_a_article)
.put(article.update_a_article)
.delete(article.delete_a_article);

module.exports = router;
