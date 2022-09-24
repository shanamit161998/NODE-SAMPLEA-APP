const express = require('express')
const app = express()

const router = require('./route')

app.use('/api/v1',router )

app.listen(3000, ()=> {
    console.log(`App is listening on port 3000`)
})