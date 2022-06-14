import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { LinksComponent } from './links/links.component';
//import { AboutComponent } from './about/about.component';
import { DirectoryComponent } from './directory/directory.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';

const routes: Routes = [
  {path: '', component: DirectoryComponent},
  {path: 'bookmarks', component: BookmarksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
