var mysql = require('mysql');
var config = require('../config');

const connect = mysql.createConnection ({
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.password,
    database: config.database
});

module.exports = connect;