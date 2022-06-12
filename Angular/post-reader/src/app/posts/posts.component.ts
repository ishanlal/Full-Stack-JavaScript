import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts = [
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

  hidePost(post: Post): void {
    this.posts= this.posts.filter(p => p.id !== post.id);
  }

}
