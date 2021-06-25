const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require("../models");

var main = async () => {
    // var u = await db.user.findOne({
    //     where: {
    //         email: 'arjun.kr@yopmail.com'
    //     }
    // });
    // var sub = await db.notification_subscription.findAll({
    //     where: {
    //         user_id: 295
    //     }
    // })
    // // console.log(u.id);
    // sub.forEach(s => {
    //     console.log(s.subscription, s.platform, s.user_id)
    // });

    let user = await db.user.findOne({ where: { email: { [Op.eq]: 'nkhs@yandex.com' } }, include: ['user_role', 'associatedTo'] });
    user = JSON.parse(JSON.stringify(user));
    console.log(user);
}
main();