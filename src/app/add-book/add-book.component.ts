import { Component, EventEmitter, Output } from '@angular/core';
import { BookComponent } from '../book/book.component';
import { FormsModule } from '@angular/forms';
import { Book } from '../models/book.interface';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [BookComponent, FormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent {
@Output () createEmitter = new EventEmitter();

book: Book = {
  id: 0,
  title: '',
  imageUrl: '',
  authorNom: '',
  authorPrenom: '',
  pages: 0,
  likes: 0,
  annee: ''
}

add(){
  this.createEmitter.emit(this.book);
}



}
