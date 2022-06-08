import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooklistComponent } from './booklist/booklist.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    BooklistComponent,
    BookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
