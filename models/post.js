/* eslint-disable eqeqeq */
'use strict';
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = (sequelize, DataTypes) => {
    const post = sequelize.define(
        'post',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            postId: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            postText: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            totalPostLikes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalPostStrikes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalPostQuotes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalPostShare: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'user',
                    key: 'id',
                },
            },
        },
        {
            sequelize,
            freezeTableName: true,
        },
    );

    post.associate = function (models) {
        post.hasMany(models.comment, {
            as: 'comments',
            foreignKey: 'postId',
        });
    };
    return post;
};
