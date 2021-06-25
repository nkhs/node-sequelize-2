var express = require('express');
var router = express.Router();

/*====Controller Listing============*/

var test = require('../controller/test');

/*=======Routes============ */

router.get('/test', test.test);

module.exports = router;
