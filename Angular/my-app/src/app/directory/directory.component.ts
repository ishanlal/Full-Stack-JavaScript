import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';
import { BookmarkService } from '../bookmark.service';
import { Link } from '../models/Link';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
  linkList: Link[] = [];

  constructor(private linkService: LinkService, private bookmarkService: BookmarkService) { }

  ngOnInit(): void {
    this.linkList = this.linkService.getLinks();
  }
  addToBookmarks(bookmark: Link): void {
    this.bookmarkService.addToBookmarks(bookmark);
    alert("Added!");
  }
}
