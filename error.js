//引入express框架
const express = require('express')
const app = express()
const fs = require('fs')

app.get('/index', (req, res, next) => {
    // throw new Error('程序发生了一些错误')
    fs.readFile('./hello.txt', 'utf8', (err, result) => {
        if (err) {
            next(err)
        } else {
            res.send(result)
        }
    })
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen(3000)
console.log('服务器已开启');