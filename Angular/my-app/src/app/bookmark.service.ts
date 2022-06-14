import { Injectable } from '@angular/core';
import { Link } from './models/Link';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  bookmarkList: Link[] = [];

  constructor() { }

  getBookmarks() {
    return this.bookmarkList;
  }
  addToBookmarks(bookmark: Link) {
    this.bookmarkList.push(bookmark);
    return this.bookmarkList;
  }
  clearBookmarks() {
    this.bookmarkList = [];
    return this.bookmarkList;
  }
}
