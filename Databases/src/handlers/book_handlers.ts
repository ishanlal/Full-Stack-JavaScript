import express from 'express';
import { Book, BookStore } from '../models/book';
import Client from '../database';
import jwt from 'jsonwebtoken';

const store = new BookStore();
const secret = process.env.TOKEN_SECRET;

const index = async (_req: express.Request, res: express.Response) => {
  const books = await store.index();
  res.json(books);
}

const show = async (_req: express.Request, res: express.Response) => {
   const book = await store.show(_req.body.id);
   res.json(book);
}

const create = async (_req: express.Request, res: express.Response) => {
    /*try {
      let authorizationHeader = '';
          authorizationHeader = (_req.headers.authorization as unknown as string);
          const token = authorizationHeader.split(' ')[1];
          jwt.verify(token, (secret as unknown as string));
      } catch(err) {
          res.status(401);
          res.json('Access denied, invalid token');
          return;
      }*/
    try {
        const book: Book = {
            id: _req.body.id,
            title: _req.body.title,
            author: _req.body.author,
            total_pages: _req.body.total_pages,
            type: _req.body.type,
            summary: _req.body.summary
        }

        const newBook = await store.create(book);
        res.json(newBook);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
}

const destroy = async (_req: express.Request, res: express.Response) => {
  /*try {
    let authorizationHeader = '';
        authorizationHeader = (_req.headers.authorization as unknown as string);
        const token = authorizationHeader.split(' ')[1];
        jwt.verify(token, (secret as unknown as string));
    } catch(err) {
        res.status(401);
        res.json('Access denied, invalid token');
        return;
    }*/
  try{
    const deleted = await store.delete(_req.body.id);
    res.json(deleted);
  } catch(error){
    res.status(400);
    res.json({ error });
  }
}

const verifyAuthToken = (_req: express.Request, res: express.Response, next: any) => {
    try {
      let authorizationHeader = '';
        authorizationHeader = (_req.headers.authorization as unknown as string);
        const token = authorizationHeader.split(' ')[1];
        const decoded = jwt.verify(token, (secret as unknown as string));
        next();
    } catch (error) {
        res.status(401);
    }
}

const book_routes = (app: express.Application) => {
  app.get('/books', index);
  app.get('/books/:id', show);
  app.post('/books', verifyAuthToken, create);
  app.delete('/books', verifyAuthToken, destroy);
}

export default book_routes;
