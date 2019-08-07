var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var glob = require("glob");
var path = require('path');
var fs = require("fs");
var formidable = require("formidable");


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
router.get('/All_Plants', function(req, res, next) {
	// console.log('here');
	var images = [];
	images = images.concat(glob.sync("./public/all_images/*.jpg"));
	images = images.concat(glob.sync("./public/all_images/*.png"));
	images = images.concat(glob.sync("./public/all_images/*.gif"));
	images = images.concat(glob.sync("./public/all_images/*.tiff"));
	images = images.concat(glob.sync("./public/all_images/*.jpeg"));
	images.sort();

	console.log(images);

  res.render('all_plants/index', { title: 'All_Plants', images: images});
});

router.post('/uploadFile', function(req, res, next){
	var upload_path = path.join(__dirname, '../public/all_images/')
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
	    // oldpath : temporary folder to which file is saved to
	    var oldpath = files.filetoupload.path;
	    var newpath = upload_path + files.filetoupload.name;
	    // copy the file to a new location
	    fs.rename(oldpath, newpath, function (err) {
	        if (err) throw err;
	        // you may respond with another html page
	        res.redirect('/Add_Plants');
	    });
	}); 	

});





module.exports = router;
