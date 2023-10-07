
const express = require('express');
const {data} = require('../data');
const router = express.Router();


router.get('/api/products', (req, res) => {
    res.json(data);
  });
  router.get('/api/products/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const product = data.find((product) => product.id === productId);
    res.json(product);

  });
  router.post('/api/products', (req, res) => {
    const { name, imageURL, type } = req.body;
    const product = {
      id: data.length + 1,
      name,
      imageURL,
      type
    }
    data.push(product);
    res.json(product);
  });
  router.put('/api/products/:id', (req, res) => {
    const { name, imageURL, type } = req.body;
    const productId = Number.parseInt(req.params.id);
    const product = data.find((product) => product.id === productId);
    
    product.name = name;
    product.imageURL = imageURL;
    product.type = type;
    res.json(product);
  })
  router.delete('/api/products/:id', (req, res) => {
    const productId = Number.parseInt(req.params.id);
    const productIndex = data.findIndex((product) => product.id === productId);
    data.splice(productIndex, 1);
    res.sendStatus(204);
  })
 
  module.exports = router;
