const express = require('express')
const router = express.Router()
const api = require('./api.js')

router.get('/all', api.all) // 查询所有学生成绩信息
router.post('/add', api.add) // 添加学生成绩信息
router.delete('/del', api.del) // 删除学生成绩信息
router.get('/find', api.find) // 查询单个学生成绩信息
router.put('/update', api.update)

module.exports = router
