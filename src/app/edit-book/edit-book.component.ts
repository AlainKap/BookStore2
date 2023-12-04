import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../models/book.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-book.component.html',
  styleUrl: './edit-book.component.css'
})
export class EditBookComponent {
  @Input () book!: Book;

  @Output() editEmitter = new EventEmitter<Book>();

  bookEdition!: Book;


  ngOnInit(){
    if (this.book) {
      this.bookEdition =  JSON.parse(JSON.stringify(this.book));
    } else {
      // Initialisation par défaut si this.book est undefined
      this.bookEdition = {
        id: 0,
        title: '',
        imageUrl: '',
        authorNom: '',
        authorPrenom: '',
        pages: 0,
        likes: 0,
        annee: ''
      };
    }
  }

  edit() {
    this.editEmitter.emit(this.bookEdition);
  }

}
