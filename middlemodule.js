//引入express框架
const express = require('express')
const app = express()

app.get('/request', (req, res,next) => {
    req.name = 'wj'
    next()
})

app.get('/request', (req, res) => {
    res.send(req.name)
})

app.listen(3000)
console.log('服务器已开启');