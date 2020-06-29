const express = require('express')

const app = express()

const path = require('path')

app.engine('html', require('express-art-template'))

app.set('views', path.join(__dirname, 'views'))

app.set('view engine', 'html')

app.get('/index', (req, res) => {
    res.render('index', {
        msg: 'message'
    })
})
app.listen(3000)