const Sequelize = require('sequelize');
const dbconfig = require('./db.config.js');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,
    {
        host: dbconfig.HOST,
        dialect: dbconfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbconfig.pool.max,
            min: dbconfig.pool.min,
            acquire: dbconfig.pool.acquire,
            idle: dbconfig.pool.idle
        } 
    }
);

sequelize.authenticate().then (()=> {
    console.log('connected successfully');
}).catch (err => {
    console.error('connection failed to connect' + err.message);
});
const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;