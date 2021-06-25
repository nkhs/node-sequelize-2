'use strict';
const { Sequelize } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define(
        'comment',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            commentUUID: {
                type: DataTypes.UUID,
                defaultValue: Sequelize.UUIDV4,
            },
            commentText: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            totalCommentLikes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalCommentStrikes: {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
            },
            totalCommentQuotes: {
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
            postId: DataTypes.INTEGER,
        },
        {
            tableName: 'comment',
            freezeTableName: true,
        },
    );
    comment.associate = function (models) {
        comment.belongsTo(models.post, {
            foreignKey: 'postId',
            as: 'post',
        });
    };
    return comment;
};
