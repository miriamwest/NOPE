var express = require('express');
var layout = require('express-layout');
var app = express();
var router = express.Router();
var crypto = require('crypto');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'NOPE'});
});
router.get('/Login', function(req, res, next) {
  res.render('login_page/index', { title: 'Login'});
});
router.get('/My_Plant_Listings', function(req, res, next) {
  res.render('my_plant_listings/index', { title: 'My_Plant_Listings'});
});
router.get('/Add_Plants', function(req, res, next) {
  res.render('add_plants/index', { title: 'Add_Plants'});
});
router.get('/All_Plants', function(req, res, next) {
  res.render('all_plants/index', { title: 'All_Plants'});
});




module.exports = router;
