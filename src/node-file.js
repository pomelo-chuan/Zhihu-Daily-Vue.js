/**
 * Created by chuanchen on 2017/1/10.
 */
var express = require('express');
var router = express.Router();
var request = require('request');
// https://github.com/izzyleung/ZhihuDailyPurify/wiki/%E7%9F%A5%E4%B9%8E%E6%97%A5%E6%8A%A5-API-%E5%88%86%E6%9E%90
router.get('/', function (req, res, next) {
   res.render('zhihu')
});
router.get('/news/latest', function (req, res, next) {
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/news/latest"
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});
router.get('/news/:id', function (req, res, next) {
    var id = req.params.id;
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/news/" + id
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});
//解决知乎图片访问限制问题
router.get('/resource', function (req, res, next) {
    var url = req.query.url;
    var options = {
        method: "GET",
        url: url,
        headers:{
            "Referer":'https://daily.zhihu.com'
        }
    };
    req.pipe(request(options)).pipe(res);
});
router.get('/before/:time', function (req, res, next) {
   var time = req.params.time;
   var options = {
       method: "GET",
       url: "http://news-at.zhihu.com/api/4/news/before/" + time
   };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});
router.get('/themes', function (req, res, next) {
   var options = {
       method: "GET",
       url: "http://news-at.zhihu.com/api/4/themes"
   };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});
router.get('/themes/:id', function (req, res, next) {
    var id = req.params.id;
    var options = {
        method: "GET",
        url: "http://news-at.zhihu.com/api/4/theme/" + id
    };
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        res.json(JSON.parse(body))
    });
});
module.exports = router;