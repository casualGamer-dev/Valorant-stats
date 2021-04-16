var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/maps', function(req, res, next) {
  res.send('Welcome to VALORANGG Maps Screen!');
});

module.exports = router;