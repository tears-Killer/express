//引入express框架
const express = require('express')
//创建网站服务器
const app = express()

app.use('/admin', (req, res, next) => {
    let isLogin = false
    if (isLogin) {
        next()
    } else {
        res.send('请登录')
    }
})

app.get('/admin', (req, res) => {
    res.send('您已经登陆')
})

app.use((req,res,next) => {
    res.status(404).send('404 NotFund')
})
app.listen(3000)
console.log('服务器已开启');