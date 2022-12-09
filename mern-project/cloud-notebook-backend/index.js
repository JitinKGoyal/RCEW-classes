// api endpoint 
const express = require('express')
const connectMongo = require('./db')

connectMongo();

const app = express()
const port = 3002

app.get('/', (req, res) => {
    res.send('Hello Notebook!!')
})

app.listen(port, () => {
    console.log(`cloud-notebook app listening on port ${port}`)
})


// mongoose, nodemon, express