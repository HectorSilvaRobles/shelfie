require('dotenv').config();
const express = require('express')
const massive = require('massive')

const {PORT, CONNECTION_STRING} = process.env
const controller = require('./controller')

const app = express()
app.use(express.json())

const {get_product, add_product, deleteProduct} = controller

massive(CONNECTION_STRING)
.then(dbInstance => {
    console.log('hi')
    app.set('db', dbInstance)
})
.catch(err => console.log('Oops it failed to connect'))

app.get('/api/inventory', get_product)
app.post('/api/product', add_product)
app.delete('/api/product/:name', deleteProduct)


app.listen(PORT, () => console.log(`listening on port ${PORT}`))