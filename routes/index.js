var express = require('express');
var router = express.Router();

var invoice = require('./invoice');


router.use('/invoice', invoice);

module.exports = router;
