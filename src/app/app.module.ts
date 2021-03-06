import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';
import { BookFormComponent } from './books/book-form/book-form.component';

import {BooksService} from './books/books.service';
import { MoviesComponent } from './movies/movies.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';
import { FormsComponent } from './forms/forms.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HomeComponent,
    BookFormComponent,
    MoviesComponent,
    MovieFormComponent,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
      BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
