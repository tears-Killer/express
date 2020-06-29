const express = require('express')

const app = express()


app.get('/index/:name/:age', (req, res) => {
    res.send(req.params)
})
app.listen(3000)
console.log('服务器已开启');