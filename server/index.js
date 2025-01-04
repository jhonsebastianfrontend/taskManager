const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

const task = require('./router/Task')
app.use('/tasks', task)

app.listen(PORT, ()=> {
    console.log("Server running on port ", PORT)
})