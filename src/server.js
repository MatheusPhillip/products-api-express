const port = 3003

const express = require('express')
const app = express()
const database = require('./database')
const bodyParser = require('body-parser');
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.get('/products', (req, res, next) =>{
    res.send(database.getProducts())
})

app.get('/products/:id', (req, res, next) =>{
    res.send(database.getProduct(req.params.id))
})

app.put('/products/:id', (req, res, next) =>{
    const product = database.saveProduct({
        id: req.params.id,
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})

app.delete('/products/:id', (req, res, next) =>{
    const product = database.deleteProduct(req.params.id)
    res.send(product)
})

app.post('/products', (req, res, next) =>{
    const product = database.saveProduct({
        name: req.body.name,
        price: req.body.price
    })
    res.send(product)
})



app.listen(port, ()=>{
    console.log(`Server running on port: ${port}`)
})