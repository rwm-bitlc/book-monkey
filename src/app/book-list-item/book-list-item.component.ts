import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  constructor() { }
  @Input() book: Book;  // Bezieht von der Parent Component "book-list" die Daten fuer das Objekt Book

  ngOnInit(): void {
  }

}
