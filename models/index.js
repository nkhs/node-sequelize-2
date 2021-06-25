'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

// const env = process.env.NODE_ENV || 'development';//"clustured";//
const env = "mysqlConfig";
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env.db_connection_string);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


db.queryRun = async function queryRun(sql) {
  return new Promise((resolve, reject) => {
    db.sequelize.query(sql).spread((queryResult) => {
      queryResult = JSON.parse(JSON.stringify(queryResult));
      // console.log(queryResult)
      // if (queryResult && queryResult[0] && queryResult[0].total) {
      //   service.price = queryResult[0].total;
      //   console.log(service.price)
      // }
      resolve(queryResult)
    }).catch(err => {
      reject(err);
    });
  })
}

module.exports = db;
