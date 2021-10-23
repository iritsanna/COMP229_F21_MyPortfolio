/* index.js - Irits Anna Mathew - 301145346 - 03-10-2021*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/*Below is the code for rendering the corresponding ejs templates to the pages*/
/* GET Home page. */

router.get('/', indexController.displayHomePage);

/* GET Home page. */
router.get('/home', indexController.displayHomePage);

/* GET About Us page. */
router.get('/about', indexController.displayAboutPage);
/*
/* GET Projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET Services page. */
router.get('/services', indexController.displayServicesPage);

/* GET Contact Us page. */
router.get('/contact',indexController.displayContactPage);


/* GET Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage);

/* POST Route for processing the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET Route for displaying the Register page */
router.get('/register', indexController.displayRegisterPage);

/* POST Route for processing the Register page */
router.post('/register', indexController.processRegisterPage);

/* GET to perform  Logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
