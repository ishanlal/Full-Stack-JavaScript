import supertest from 'supertest';
import app from '../server';

const request = supertest(app);
let token: string;

describe('Test User endpoint responses', () => {
    it('delete the users endpoint', async () => {
        const response = await request.delete('/users').send({
          id: 1
        });
        expect(response.status).toBe(200);
    });
    it('post the users endpoint', async () => {
        const response = await request.post('/users').send({
          id: 1,
          username: 'JohnDoe',
          password_digest: 'hehe'
        });
        token = response.body;
        expect(response.status).toBe(200);
    });
    it('gets the users index endpoint', async () => {
        const response = await request.get('/users');
        expect(response.status).toBe(200);
    });
    it('gets the users show endpoint', async () => {
        const response = await request.get('/users/:id').send({id: 1});
        expect(response.status).toBe(200);
    });
});

describe('Test Book endpoint responses', () => {
  it('delete the books endpoint', async () => {
    const response = await request.delete('/books').send({
      id: 1
    }).set({
      authorization: 'Bearer ' + token
    });
    expect(response.status).toBe(200);
  });
  it('post the books endpoint', async () => {
    const response = await request.post('/books').send({
      id: 1,
      title: 'Bridge to Terabithia',
      author: 'Katherine Paterson',
      total_pages: 250,
      type: 'Childrens',
      summary: `a children's book`
    }).set({
      authorization: 'Bearer ' + token
    });
    expect(response.status).toBe(200);
  });
  it('gets the books index endpoint', async () => {
    const response = await request.get('/books');
    expect(response.status).toBe(200);
  });
  it('gets the books show endpoint', async () => {
    const response = await request.get('/books/:id').send({id: 1});
    expect(response.status).toBe(200);
  });
});
