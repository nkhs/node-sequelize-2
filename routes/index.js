var express = require('express');
var router = express.Router();

var test = require('./test');


router.use('/test', test);

module.exports = router;
