'use strict';
module.exports = (sequelize, DataTypes) => {
    const comment = sequelize.define(
        'comment',
        {
            postId: DataTypes.INTEGER,
            name: DataTypes.STRING,
        },
        {
            tableName: 'comment',
        },
    );
    comment.associate = function (models) {
        // associations can be defined here
    };
    return comment;
};
