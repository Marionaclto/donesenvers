const express = require('express')

const db = require('./lib/helper')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send({
        message: 'This is working'
    })
})

module.exports = routes