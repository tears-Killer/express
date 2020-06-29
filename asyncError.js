//引入express框架
const express = require('express')
const app = express()
const fs = require('fs')
const promisify = require('util').promisify
const readFile = promisify(fs.readFile)

app.get('/index', async (req, res, next) => {
    try {
        await readFile('./hello.txts')
    } catch (ex) {
        next(ex)
    }
})

app.use((err, req, res, next) => {
    res.status(500).send(err.message)
})

app.listen(3000)
console.log('服务器已开启');