const db = require('./db/mysql.js')
exports.all = (req, res) => {
    const sql = 'select * from stu_info'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send('错误：%s', err.message)
        }
        res.send(data)
    })
}
