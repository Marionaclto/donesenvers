const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const apiRoutes = require('./routes')

const app = express()

app.use(cors())
app.use(bodyParser.json())

app.use('/api', apiRoutes)

app.get('/', (req, res) => {
    res.send({
        message: 'This is working'
    })
})

app.listen(process.env.API_PORT, () => {
    console.log(`Starting server in port ${process.env.API_PORT}`)
})