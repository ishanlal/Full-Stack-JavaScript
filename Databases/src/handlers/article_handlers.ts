import express from 'express';
import {Article, ArticleStore} from '../models/article';

const store = new ArticleStore();

// handler functions here
const index = async(_req: express.Request, res: express.Response) => {
  const articles = await store.index();
  res.json(articles);
}

const show = async (req: express.Request, res: express.Response) => {
   const article = await store.show(req.body.id);
   res.json(article);
}

const create = async (req: express.Request, res: express.Response) => {
    try {
        const article: Article = {
            id: req.body.id,
            title: req.body.title,
            content: req.body.content,
        }

        const newArticle = await store.create(article);
        res.json(newArticle);
    } catch(err) {
        res.status(400);
        res.json(err);
    }
}

const destroy = async (req: express.Request, res: express.Response) => {
    const deleted = await store.delete(req.body.id);
    res.json(deleted);
}

const article_routes = (app: express.Application) =>{
// express routes here
  app.get('/articles', index);
  app.get('/articles/:id', show);
  app.post('/articles', create);
  app.delete('/articles', destroy);
}

export default article_routes;
