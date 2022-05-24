// @ts-ignore
import Client from '../database'

export type Article = {
  id: number;
  title: string;
  content: string;
}

export class ArticleStore {
  async index(): Promise<Article[]> {
    try {
      // @ts-ignore
      const conn = await Client.connect()
      const sql = 'SELECT * FROM articles'

      const result = await conn.query(sql)

      conn.release()

      return result.rows
    } catch (err) {
      throw new Error(`Could not get articles. Error: ${err}`)
    }
  }

  async show(id: number): Promise<Article> {
    try {
        const sql = 'SELECT * FROM articles WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [id])

        conn.release()

        return result.rows[0]
    } catch (err) {
        throw new Error(`Could not get article ${id}. Error: ${err}`)
    }
  }

  async create(article: Article): Promise<Article> {
    try {
        const sql = 'INSERT INTO articles (id, title, content) VALUES($1, $2, $3) RETURNING *'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [article.id, article.title, article.content])

        const firstArticle = result.rows[0];

        conn.release();

        return firstArticle;
    } catch (err) {
        throw new Error(`Could not add article ${article.title}. Error: ${err}`)
    }
  }

  async delete(id: number): Promise<Article> {
    try {
      const sql = 'DELETE FROM articles WHERE id=($1)'
        // @ts-ignore
        const conn = await Client.connect()

        const result = await conn.query(sql, [id])

        const article = result.rows[0]

        conn.release()

        return article
    } catch (err) {
        throw new Error(`Could not delete article ${id}. Error: ${err}`)
    }
  }
}
