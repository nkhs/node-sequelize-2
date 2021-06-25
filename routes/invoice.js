var express = require('express');
var router = express.Router();

/*====Controller Listing============*/

var invoice = require('../controller/invoice');

/*=======Routes============ */

router.get('/invoices', invoice.invoices);

module.exports = router;
