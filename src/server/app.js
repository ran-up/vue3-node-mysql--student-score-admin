const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const router = require('./router')

/**
 * bodyParser.json() 解析 Content-Type 为 application/json 的请求体
 * 当客户端发送 JSON 格式的数据到服务器时
 * 此中间件会解析这些数据，并挂在到 req.body 属性上
 */
app.use(bodyParser.json()) //配置解析，用于解析json和urlencoded格式的数据
/**
 * bodyParser.urlencoded() 解析 Content-Type 为 application/x-www-form-urlencoded 的请求体
 * 这种编码类型是 HTML 表单提交数据的默认编码方式
 * 接收一个配置，extended，它决定使用哪种库来解析 URL 编码的数据
 * extended: true，默认，使用 qs 库来解析，支持对象和数组等复杂结构
 * extended: false，使用 querystring 库来解析，只支持简单的键值对数据，不支持嵌套对象和数组。
 */
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors()) // 配置跨域，必须在路由之前
app.use(router)

app.listen(3666, () => {
    console.log('服务在端口3666启动成功...')
})
