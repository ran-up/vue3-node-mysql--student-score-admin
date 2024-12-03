const mysql = require('mysql')

const db = mysql.createPool({
    host: '127.0.0.1', //数据库IP地址
    user: 'root',
    password: '123456',
    port: '3306', //数据库访问端口
    database: 'vue-node-mysql--student-score-admin' //要操作的数据库
})
module.exports = db
