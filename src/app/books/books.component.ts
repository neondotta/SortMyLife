import { Component, OnInit } from '@angular/core';
import {BooksService} from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private books: any[] = [];

  constructor( private booksService: BooksService ) { }

  ngOnInit() {

    this.books = this.booksService.getAllBook();

  }

}
