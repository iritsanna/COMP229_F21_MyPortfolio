/* users.js - Irits Anna Mathew - 301145346 - 23-10-2021*/

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Placeholder');
});

module.exports = router;
