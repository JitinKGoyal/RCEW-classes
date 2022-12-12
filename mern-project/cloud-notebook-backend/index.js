// api endpoint 
const express = require('express')
const connectMongo = require('./db')

connectMongo();

const app = express()
const port = 3002


app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
    console.log(`cloud-notebook app listening on port ${port}`)
})


// mongoose, nodemon, express