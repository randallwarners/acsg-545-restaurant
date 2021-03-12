var express = require('express');
var router = express.Router();
var db = require('../db');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Group D Mexican Grill',
    categories: db.categories,
  });
});

module.exports = router;
