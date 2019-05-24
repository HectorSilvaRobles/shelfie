require('dotenv').config();
const express = require('express')
const massive = require('massive')

const {PORT, CONNECTION_STRING} = process.env
const controller = require('./controller')

const app = express()
app.use(express.json())

console.log(CONNECTION_STRING)

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set('db', dbInstance)
})
.catch(err => console.log('Oops it failed to connect'))



app.listen(PORT, () => console.log(`listening on port ${PORT}`))