var express = require('express');
var layout = require('express-layout');
var app = express();
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NOPE' });
});
router.get('/Login', function(req, res, next) {
  res.render('index', { title: 'Login', {error: null});
});
router.get('/My_Plant_Listings', function(req, res, next) {
  res.render('index', { title: 'My_Plant_Listings', {error: null});
});
router.get('/Add_Plants', function(req, res, next) {
  res.render('index', { title: 'Add_Plants', {error: null});
});
router.get('/All_Plants', function(req, res, next) {
  res.render('index', { title: 'All_Plants', {error: null});
});




module.exports = router;
