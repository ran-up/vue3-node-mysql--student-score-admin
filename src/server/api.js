const db = require('./db/mysql.js')
let stuInfo = {} // 编辑的选手信息
let hasChanged = false

// 获取所有学生成绩信息
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
// 添加学生成绩信息
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
// 删除学生成绩信息
exports.del = (req, res) => {
    const sql = 'delete from stu_info where id = ?'
    db.query(sql, [req.query.id], (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                message: '删除失败'
            })
        } else if (data.affectedRows > 0) {
            return res.send({
                code: 200,
                message: '删除成功'
            })
        } else {
            return res.send({
                code: 202,
                message: '查无此人'
            })
        }
    })
}
// 查询单个学生成绩信息
exports.find = (req, res) => {
    const sql = 'select * from stu_info where id = ?'
    db.query(sql, [req.query.id], (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                message: '查询失败'
            })
        } else if (data.length > 0) {
            stuInfo = data[0]
            return res.send({
                code: 200,
                message: '查询成功',
                data
            })
        } else {
            return res.send({
                code: 202,
                message: '查询失败'
            })
        }
    })
}
// 更新学生成绩信息
exports.update = (req, res) => {
    hasChanged = false
    for (const key in req.body) {
        if (req.body[key] != stuInfo[key]) {
            hasChanged = true
        }
    }
    if (!hasChanged) {
        return res.send({
            code: 202,
            message: '信息未修改'
        })
    }
    const sql =
        'update stu_info set name = ?, gender = ?, chinese = ?, math = ?, english = ? where id = ?'
    const { name, gender, chinese, math, english, id } = req.body
    db.query(sql, [name, gender, chinese, math, english, id], (err, data) => {
        if (err) {
            return res.send({
                code: 400,
                message: '信息更新失败'
            })
        } else if (data.affectedRows > 0) {
            return res.send({
                code: 200,
                message: '信息更新成功',
                data
            })
        } else {
            return res.send({
                code: 202,
                message: '信息未修改'
            })
        }
    })
}
