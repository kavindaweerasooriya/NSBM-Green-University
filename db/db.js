const Sequelize  = require('sequelize');
const config = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "nsbm",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
};

const db = {}
const sequelizeconnection = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,
    pool: {
        max: config.pool.max,
        min: config.pool.min,
        acquire: config.pool.acquire,
        idle: config.pool.idle
    }
});
sequelizeconnection.sync()


db.User = require("../models/user.model")(sequelizeconnection)

module.exports = db;