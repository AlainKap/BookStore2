import { Component, Input } from '@angular/core';
import { Personne } from '../models/personne.interface';
import { BookComponent } from '../book/book.component';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [BookComponent],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent {
  @Input() authors: Personne[] = [];
}
