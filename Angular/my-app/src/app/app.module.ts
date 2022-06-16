import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ZooComponent } from './zoo/zoo.component';
import { ZooAnimalComponent } from './zoo-animal/zoo-animal.component';
import { LinksComponent } from './links/links.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DirectoryComponent } from './directory/directory.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RecipeComponent,
    ZooComponent,
    ZooAnimalComponent,
    LinksComponent,
    BookmarksComponent,
    DirectoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
