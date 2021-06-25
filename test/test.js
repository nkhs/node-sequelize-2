const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

var main = async () => {
    try {
        const data = await db.post.findAll({
            where: { userId: 1 },
            attributes: ['postText', 'totalPostLikes', 'totalPostStrikes', 'totalPostQuotes', 'totalPostShare'],
            include: [{ model: db.comment, attributes: ['commentText'], as: 'comments' }],
        });
        console.log(JSON.parse(JSON.stringify(data)));
    } catch (e) {
        console.log(e);
    }
};
main();
