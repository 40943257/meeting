var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/user', function(req, res, next) {
  res.render('user');
});

router.get('/join', function(req, res, next) {
  res.render('join');
});

router.get('/booking', function(req, res, next) {
  res.render('booking');
});

module.exports = router;
