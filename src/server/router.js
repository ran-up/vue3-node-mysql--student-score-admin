const express = require('express')
const router = express.Router()
const api = require('./api.js')

router.get('/all', api.all)

module.exports = router
