import express from 'express';
import { Book, BookStore } from '../models/book';
import jwt from 'jsonwebtoken';

const store = new BookStore();

const index = async (_req: express.Request, res: express.Response) => {
  const books = await store.index();
  res.json(books);
}

const show = async (_req: express.Request, res: express.Response) => {
   const book = await store.show(_req.body.id);
   res.json(book);
}

const create = async (_req: express.Request, res: express.Response) => {
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
    const deleted = await store.delete(_req.body.id);
    res.json(deleted);
}

const book_routes = (app: express.Application) => {
  app.get('/books', index);
  app.get('/books/{:id}', show);
  app.post('/books', create);
  app.delete('/books', destroy);
}

export default book_routes;
