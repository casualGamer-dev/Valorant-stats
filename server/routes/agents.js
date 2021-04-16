var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/agents', function(req, res, next) {
  res.send('Welcome to VALORANGG Agent Screen!');
});

module.exports = router;