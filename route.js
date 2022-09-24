const express = require('express')
const router = express.Router()


router.get('/ping', (req, res) => {
    res.send({msg : ` You are successfully able to connect to node js application ! Congo`})
})

module.exports = router