import { Router } from 'express';
import bodyParser from 'body-parser';
const api = new Router();
const jsonParser = bodyParser.json();

const productList = [
  {
    id: 1,
    name: 'The Classic',
    price: 12_900,
    image: 'images/watch1.png',
  },
  {
    id: 2,
    name: 'The Navigator',
    price: 15_900,
    image: 'images/watch2.png',
  },
  {
    id: 3,
    name: 'The Chronometer',
    price: 18_900,
    image: 'images/watch3.png',
  },
];

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

api.get('/products', async (req, res) => {
  const products = productList.map((product) => ({ ...product }));
  products[random(0, products.length)].isPromo = true;
  return res.json(products);
});

api.get('/products/:id', async (req, res) => {
  const id = +req.params.id;
  const [product] = productList.filter((product) => product.id === id);
  return res.json(product);
});

const cartItems = [];
api.get('/cart/items', async (req, res) => {
  return res.json(cartItems);
});

api.post('/cart/items', jsonParser, async (req, res) => {
  const watch = req.body;
  cartItems.push(watch);
  return res.status(200).end();
});

export default api;
