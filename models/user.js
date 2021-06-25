/* eslint-disable eqeqeq */
'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.INTEGER(255),
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
        },
        {
            sequelize,
            freezeTableName: true,
        },
    );

    user.associate = function (models) {};
    return user;
};
