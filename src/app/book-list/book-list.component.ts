import { Component, OnInit} from '@angular/core';

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

  ngOnInit(): void {
    
    this.bs.getAll().subscribe(res => this.books = res);
 
  }

}
