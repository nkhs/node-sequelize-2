const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

module.exports = {
    async invoices(req, res, next) {
        res.send([]);
    },
};
