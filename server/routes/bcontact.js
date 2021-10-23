let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let jwt = require('jsonwebtoken');

let passport = require('passport');

let bcontactController = require('../controllers/bcontact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

/* GET Route for the Business Contact List page - READ Operation */
router.get('/', bcontactController.displayBcontactList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, bcontactController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, bcontactController.processAddPage);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', requireAuth, bcontactController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', requireAuth, bcontactController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', requireAuth, bcontactController.performDelete);

module.exports = router;