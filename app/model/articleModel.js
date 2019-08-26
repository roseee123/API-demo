'user strict';
var conf = require('../../db');
var sql = require('mysql');
var connection = sql.createConnection(conf.db);

var Article = function(article) {
    this.id= article.id;
    this.title = article.title;
    this.contents = article.contents;
    // this.created_at = new Date();
};

Article.createArticle = function(newArticle, result) {
    connection.query("insert into article set ?", newArticle, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Article.getArticleById = function(id, result) {
    connection.query("select * from article where id = ?", id, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};
Article.getAllArticle = function(result) {
    connection.query("select * from article", function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log('article: ', res);
            result(null, res);
        }
    });
};
Article.updateArticleById = function(id, article, result) {

    connection.query("update article set title=?, contents=? where id = ?", [article.title, article.contents, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

Article.remove = function(id, result) {
    connection.query("delete from article where id = ?", [id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = Article;