const express = require('express')
const app = express()
const PORT = 5000
app.use(express.json())
const ctrl = require('./contoller')

app.get('./api/people', ctrl.getAllPeople)

app.listen(PORT, ()=> console.log(`FredPort ${PORT}` ))

