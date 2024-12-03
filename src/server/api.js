const db = require('./db/mysql.js')
exports.all = (req, res) => {
    const sql = 'select * from stu_info'
    db.query(sql, (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                message: err.message
            })
        }
        res.send({
            code: 200,
            message: '查询成功',
            data
        })
    })
}

exports.add = (req, res) => {
    const sql = 'insert into stu_info (name, gender, chinese, math, english) value (?, ?, ?, ?, ?)'
    const { name, gender, chinese, math, english } = req.body
    db.query(sql, [name, gender, chinese, math, english], (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                message: err.message
            })
        } else if (data.affectedRows > 0) {
            return res.send({
                code: 200,
                message: `添加 ${name} 信息成功`
            })
        } else {
            return res.send({
                code: 202,
                message: `${name} 信息已存在`
            })
        }
    })
}
