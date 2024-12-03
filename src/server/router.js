const express = require('express')
const router = express.Router()
const api = require('./api.js')

router.get('/all', api.all)
router.post('/add', api.add)

module.exports = router
