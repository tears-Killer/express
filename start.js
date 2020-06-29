//引入express框架
const express = require('express')
//创建网站服务器
const app = express()

app.get('/', (req, res) => {
    //send() 内部会检测相应内容的类型 会自动设置http状态码 会自动设置相应的内容类型及编码
    res.send('hello express')
})

app.get('/list', (req, res) => {
    //send() 内部会检测相应内容的类型 会自动设置http状态码 会自动设置相应的内容类型及编码
    res.send({name:'wj',age:22})
})

app.listen(3000)
console.log('服务器已开启');
