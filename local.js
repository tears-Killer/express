const express = require('express')

const app = express()

const path = require('path')

app.engine('html', require('express-art-template'))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'html')

//公共的资源
app.locals.users = [{
    name:'wj',
    age:20
},{
    name:'wzx',
    age:22
}]

app.get('/index', (req, res) => {
    res.render('index', {
        msg: 'message'
    })
})
app.listen(3000)