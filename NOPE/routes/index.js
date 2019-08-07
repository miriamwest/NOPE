var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var glob = require("glob");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login'});
});


router.post('/login_page', function(req, res, next){
	if (req.body.username && req.body.password){
	req.session.authentication ={
		username: req.body.username,
		password: req.body.username,
		  };

    res.redirect('/login_page/index.html');
  } else {
    res.render('login', { error: 'Invalid Username or Password' })};
});

router.get('/My_Plant_Listings', function(req, res, next) {
  res.render('my_plant_listings/index', { title: 'My_Plant_Listings'});
});
router.get('/Add_Plants', function(req, res, next) {
  res.render('add_plants/index', { title: 'Add_Plants'});
});
router.get('/all_plants', function(req, res, next) {
	// console.log('here');
	var images = [];
	images = images.concat(glob.sync("../public/images/*.jpg"));
	images = images.concat(glob.sync("../public/images/*.png"));
	images = images.concat(glob.sync("../public/images/*.gif"));
	images = images.concat(glob.sync("../public/images/*.tiff"));
	images.sort();

  res.render('all_plants/index', { title: 'All_Plants', images: images});
});


module.exports = function (router) { 

    router.get('/', function(req, res) {
         res.render('/')});
    };

    