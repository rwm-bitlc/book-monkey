import { Component, OnInit, Output, EventEmitter} from '@angular/core';

import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'bm-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bs: BookStoreService) { }

  books: Book[];
  @Output() showDetailsEvent = new EventEmitter<Book>();

  ngOnInit(): void {
    this.books = this.bs.getAll();
 
  }

  showDetails(book: Book) {
    this.showDetailsEvent.emit(book);
  }

}
