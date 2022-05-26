import express from 'express';
import { User, UserStore } from '../models/user';
import jwt from 'jsonwebtoken';

const store = new UserStore();

const index = async (_req: express.Request, res: express.Response) => {
  const users = await store.index();
  res.json(users);
}

const show = async (_req: express.Request, res: express.Response) => {
   const user = await store.show(_req.body.id);
   res.json(user);
}

const create = async (_req: express.Request, res: express.Response) => {
    try {
        const user: User = {
            id: _req.body.id,
            username: _req.body.username,
            password_digest: _req.body.password_digest
        }

        const newUser = await store.create(user);
        res.json(newUser);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
}

const destroy = async (_req: express.Request, res: express.Response) => {
    const deleted = await store.delete(_req.body.id);
    res.json(deleted);
}

const user_routes = (app: express.Application) => {
  app.get('/users', index);
  app.get('/users/{:id}', show);
  app.post('/users', create);
  app.delete('/users', destroy);
}

export default user_routes;
