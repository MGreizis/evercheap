import express from 'express';
import cors from 'cors';
const router = express.Router();
import {
  getProduct,
  getProducts,
} from '../controllers/productController.js';

// root level route, this one is optional
router.get('/', cors(), (req, res, next) => {
  res.json('Welcome to the dawg api 🐶');
});

/**
 * all products routes
 */
 router.options('/stores/lidlProducts', (req, res, next) => {
  //set header before response
  res.header({
    allow: 'GET, POST, OPTIONS',
    'Content-type': 'application/json',
    Data: Date.now(),
    'Content-length': 0,
  });
  //response
  res.sendStatus(200);
});

// get a collection of all the products and ou can use a query
router.get('/stores/lidlProducts', cors(), getProducts);

// get an individual product
router.get('/stores/lidlProducts/:id', cors(), getProduct);

// post a route using the middleware for reading the body
// router.post('/products', cors(), setproduct);

// delete an individual product
// TODO: not implemented yet
router.delete('/stores/lidlProducts/:id', cors(), (req, res, next) => {
  const product = req.params.product;
  res.json({
    title: 'deleted',
    message: `oops ${product} was deleted accidentally 🥺`,
  });
});

export default router;
