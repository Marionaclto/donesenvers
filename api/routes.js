const express = require('express')

const db = require('./lib/db')

const routes = express.Router()

routes.get('/', (req, res) => {
    res.send({
        message: 'This is also working'
    })
})

module.exports = routes