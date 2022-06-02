import express from 'express';
import { Product, ProductStore } from '../models/product';
import Client from '../database';
import jwt from 'jsonwebtoken';

const store = new ProductStore();
const secret = process.env.TOKEN_SECRET;

const index = async (_req: express.Request, res: express.Response) => {
  const products = await store.index();
  res.json(products);
}

const show = async (_req: express.Request, res: express.Response) => {
   const product = await store.show(_req.body.id);
   res.json(product);
}

const create = async (_req: express.Request, res: express.Response) => {
    try {
        const product: Product = {
            id: _req.body.id,
            name: _req.body.name,
            price: _req.body.price
        }
        const newProduct = await store.create(product);
        res.json(newProduct);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
}

const product_routes = (app: express.Application) => {
  app.get('/products', index);
  app.get('/products/:id', show);
  app.post('/products', create);
}

export default product_routes;
