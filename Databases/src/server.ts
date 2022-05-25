import express from 'express';
import bodyParser from 'body-parser';
import article_routes from './handlers/article_handlers';
import book_routes from './handlers/book_handlers';
import user_routes from './handlers/user_handlers';

const app: express.Application = express();
const address: string = "0.0.0.0:3000";

app.use(bodyParser.json());

app.get('/', function (req: express.Request, res: express.Response) {
    res.send('Hello World!')
});

/*
// REST Routes here
app.get('/articles', (_req: Request, res: Response) => {
    try {
        res.send('this is the INDEX route')
    } catch (err) {
        res.status(400)
        res.json(err)
    }
})

app.get('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the SHOW route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.post('/articles', (req: Request, res: Response) => {
    const article: Article = {
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the CREATE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.put('/articles/:id', (req: Request, res: Response) => {
    const article: Article = {
      id: req.params.id,
      title: req.body.title,
      content: req.body.content
    }
    try {
       res.send('this is the EDIT route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
})

app.delete('/articles/:id', (_req: Request, res: Response) => {
    try {
       res.send('this is the DELETE route')
    } catch (err) {
       res.status(400)
       res.json(err)
    }
}
*/

article_routes(app);
book_routes(app);
user_routes(app);

app.listen(3000, function () {
    console.log(`starting app on: ${address}`)
});
