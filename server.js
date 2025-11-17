const express = require('express')
const cookieParser = require('cookie-parser')
const api = require('./routes/api.js')
const datab = require('./utils/db.js')
const cors = require('cors') // cross origin sharing for front end

const port = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use('/', api)

app.listen(port, () => {
    console.log(`Server connected and running on port ${port}`)
})
