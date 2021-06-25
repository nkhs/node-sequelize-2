/* eslint-disable eqeqeq */
'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define(
        'post',
        {
            first_name: { type: DataTypes.STRING, trim: true },
        },
        {
            sequelize,

            charset: 'utf8',
            collate: 'utf8_unicode_ci',

            underScore: true,
        },
    );

    post.associate = function (models) {};
    return post;
};
