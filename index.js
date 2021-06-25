var express = require('express');
var router = express.Router();

var indexRouter = require('./routes/index');
router.use('/', indexRouter);

module.exports = router;
