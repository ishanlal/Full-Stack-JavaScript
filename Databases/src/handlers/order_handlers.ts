import express from 'express';
import { Order, OrderStore } from '../models/order';
import Client from '../database';
import jwt from 'jsonwebtoken';

const store = new OrderStore();
const secret = process.env.TOKEN_SECRET;

const index = async (_req: express.Request, res: express.Response) => {
  const orders = await store.index();
  res.json(orders);
}

const show = async (_req: express.Request, res: express.Response) => {
   const order = await store.show(_req.body.id);
   res.json(order);
}

const create = async (_req: express.Request, res: express.Response) => {
    try {
        const order: Order = {
            id: _req.body.id,
            status: _req.body.status,
            user_id: _req.body.user_id
        }
        const newOrder = await store.create(order);
        res.json(newOrder);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
}

// ... other methods
const addProduct = async (_req: express.Request, res: express.Response) => {
  const orderId: string = _req.params.id;
  const productId: string = _req.body.productId;
  const quantity: number = parseInt(_req.body.quantity)

  try {
    const addedProduct = await store.addProduct(quantity, orderId, productId);
    res.json(addedProduct);
  } catch(err) {
    res.status(400);
    res.json(err);
  }
}

const order_routes = (app: express.Application) => {
  app.get('/orders', index);
  app.get('/orders/:id', show);
  app.post('/orders', create);
  app.post('/orders/:id/products', addProduct);
}

export default order_routes;
