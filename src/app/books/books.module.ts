import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';

import {BooksComponent} from './books.component';
import {BookFormComponent} from './book-form/book-form.component';

import {BooksService} from './books.service';

import {BooksRoutingModule} from './books-routing.module';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      BooksRoutingModule
  ],
  declarations: [
      BooksComponent,
      BookFormComponent
  ],
  providers: [
      BooksService
  ]
})
export class BooksModule { }
