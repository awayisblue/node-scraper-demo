const Composer = require('mysql-composer')
const mysql = require('mysql')
    const config = require('../config')
    const connection = mysql.createConnection({
        host     : config.mysql.host,
        user     : config.mysql.user,
        password : config.mysql.password,
        database : 'my_db',
        charset: 'utf8mb4'
});

module.exports.composer = new Composer(connection)

