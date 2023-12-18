'use strict';

const mysql = require('mysql2');
const config = require('./constants.json')

const pool = mysql.createPool({
    host: config['DB.HOST'],
    user: config['DB.USER'],
    password: config['DB.PASS'],
    database: config['DB.NAME']
});

module.exports = pool.promise()