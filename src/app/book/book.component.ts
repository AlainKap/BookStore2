import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AuthorComponent } from '../author/author.component';
import { Book } from '../models/book.interface';
import { AddBookComponent } from '../add-book/add-book.component';
import { EditBookComponent } from '../edit-book/edit-book.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [AuthorComponent, AddBookComponent, EditBookComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.css',
})
export class BookComponent {
  @Input() books: Book[] = [];

  @Output() editEmitter = new EventEmitter<Book>();

  showAddForm = false;

  book!: Book;
  selectedBook: Book | undefined;

  selectBook(bookId: number) {
    this.selectedBook = this.books.find(
      (book) => book.id === bookId
    );
  }

  edit(item: Book) {
    const index = this.books.findIndex((l) => l.id === item.id);
    if (index !== -1) {
      this.books[index] = item;
    }
  }

 /* addItem(item: Book) {
    const id = this.books[this.books.length - 1].id;
    if (id !== undefined) {
      const newId = id + 1;
      item.id = newId;
      this.books.push(item);
    }
  }*/

  index = 0;

  removeItem(index: number) {
    this.books.splice(index, 1);
  }

 /* private closeAddForm() {
    this.showAddForm = false;
  }*/
}
