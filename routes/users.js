/* users.js - Irits Anna Mathew - 3011145346 - 03-10-2021*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
