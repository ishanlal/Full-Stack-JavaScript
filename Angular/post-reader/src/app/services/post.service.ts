import { Injectable } from '@angular/core';
import { Post } from '../models/Post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>("https://jsonplaceholder.typicode.com/posts?_limit=8");
  }
}

/*
[
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
*/
