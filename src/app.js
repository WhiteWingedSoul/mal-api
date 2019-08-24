const express = require('express')
const router = require('./route')

const app = express()
app.get('/', (req, res) => res.send("Hello World Too"))
// app.use('/api', router)
app.listen(3000, () => console.log(`Example app listening on port 3000`))