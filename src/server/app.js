const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')

app.use(bodyParser.json()) //配置解析，用于解析json和urlencoded格式的数据
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()) // 配置跨域，必须在路由之前
app.use(router)

app.listen(3666, () => {
    console.log('服务在端口3666启动成功...')
})
