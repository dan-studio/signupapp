const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS, () => console.log("DB connected"))

const port = 4000

app.use(express.json())
app.use(cors())
app.use('/app', routesUrls)
app.listen(port, () => console.log('server is up and running at port ' + port))

