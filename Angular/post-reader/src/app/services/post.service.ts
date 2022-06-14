import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor() { }
  getPosts(){
    return [
      {
      id: 1,
      title: 'My first post',
      body: 'just testing this out',
      votes: 1
      },
      {
      id: 2,
      title: "what's your favorite front-end framework?",
      body: 'mine is React',
      votes: 1
      },
    ];
  }
}
