import {
    getProductData,
    getProductsData,
} from '../adapters/supabaseadapter.js';

export async function getProduct(req, res) {
    const rows = await getProductData(req.params.id);
    if (rows.length > 0) {
      const response = {};
      response.meta = {
        title: 'individual product',
        url: `${req.originalUrl}`
      }
      response.data = rows[0];
      res.json(response);
    } else {
      res.status(500).json({ message: 'i cannot find the product' });
    }
}

export async function getProducts(req, res) {
    const products = {};
    const rows = await getProductsData();
    if (rows.length > 0) {
      products.meta = {
        title: 'all products',
        url: req.originalUrl,
      };
      products.data = [];
      rows.map((product) => {
        products.data.push({
          id: product.id,
          state: product.state,
          // timeslot: product.timeslot,
          name: product.name,
        });
      });
      res.json(products);
    } else {
      res.status(500);
      res.json({
        title: 'no products found',
        message: `🥴 We did something wrong`,
      });
    }
  }