/* index.js - Irits Anna Mathew - 3011145346 - 03-10-2021*/

var express = require('express');
var router = express.Router();

/*Below is the code for rendering the corresponding ejs templates to the pages*/
/* GET Home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',next:'about'});
});

/* GET Home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home', next:'about'});
});

/* GET About Us page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About', link: "Resume.pdf",});

});
/*
/* GET Projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',next:'services'});
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',next:'contact'});
});


/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact',next:'home'});
  
});


module.exports = router;
