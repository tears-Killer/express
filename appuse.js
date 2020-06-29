//引入express框架
const express = require('express')
const app = express()

app.use((req,res,next) => {
    console.log('app.use中间件');
    next()
})

app.use('/request',(req,res,next) => {
    console.log('request中间件');
    req.name = 'wj'
    next()
})


app.get('/request', (req, res) => {
    res.send(req.name)
})
app.listen(3000)
console.log('服务器已开启');