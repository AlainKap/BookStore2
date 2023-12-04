import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { BookComponent } from './book/book.component';
import { Book } from './models/book.interface';
import { AuthorComponent } from './author/author.component';
import { Personne } from './models/personne.interface';
import { HeaderComponent } from './header/header.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    BookComponent,
    AuthorComponent,
    HeaderComponent,
    AddBookComponent,
    EditBookComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})


export class AppComponent implements OnInit {

  constructor(private router: Router){}


  ngOnInit(): void {

  }

  onAddNewBook(): void {
    this.router.navigateByUrl('/addBook');
  }

  liste: Book[] = [
    {
      id: 1,
      title: 'Le Pendule de Foucault',
      authorNom: 'Eco',
      authorPrenom: 'Umberto',
      imageUrl: '',
      pages: 950,
      annee: '1986',
      likes: 23,
    },
    {
      id: 2,
      title: 'The Shining',
      authorNom: 'King',
      authorPrenom: 'Stephen',
      imageUrl: '',
      pages: 642,
      annee: '1979',
      likes: 23,
    },
    {
      id: 3,
      title: 'Ragtime',
      authorNom: 'Doctorow',
      authorPrenom: 'E. L.',
      imageUrl: '',
      pages: 270,
      annee: '1975',
      likes: 23,
    },
    {
      id: 4,
      title: '1984',
      authorNom: 'Orwell',
      authorPrenom: 'George',
      imageUrl: '',
      pages: 328,
      annee: '1949',
      likes: 23,
    },
    {
      id: 5,
      title: 'To Kill a Mockingbird',
      authorNom: 'Lee',
      authorPrenom: 'Harper',
      imageUrl: '',
      pages: 281,
      annee: '1960',
      likes: 23,
    },
    {
      id: 6,
      title: 'The Catcher in the Rye',
      authorNom: 'Salinger',
      authorPrenom: 'J.D.',
      imageUrl: '',
      pages: 224,
      annee: '1951',
      likes: 23,
    },
    {
      id: 7,
      title: 'Pride and Prejudice',
      authorNom: 'Austen',
      authorPrenom: 'Jane',
      imageUrl: '',
      pages: 279,
      annee: '1813',
      likes: 23,
    },
    {
      id: 8,
      title: 'The Great Gatsby',
      authorNom: 'Fitzgerald',
      authorPrenom: 'F. Scott',
      imageUrl: '',
      pages: 218,
      annee: '1925',
      likes: 23,
    },
    {
      id: 9,
      title: 'Moby-Dick',
      authorNom: 'Melville',
      authorPrenom: 'Herman',
      imageUrl: '',
      pages: 585,
      annee: '1851',
      likes: 23,
    },
    {
      id: 10,
      title: 'Brave New World',
      authorNom: 'Huxley',
      authorPrenom: 'Aldous',
      imageUrl: '',
      pages: 311,
      annee: '1932',
      likes: 23,
    },
    {
      id: 11,
      title: 'The Lord of the Rings',
      authorNom: 'Tolkien',
      authorPrenom: 'J.R.R.',
      imageUrl: '',
      pages: 1178,
      annee: '1954',
      likes: 23,
    },
    {
      id: 12,
      title: 'Jane Eyre',
      authorNom: 'Brontë',
      authorPrenom: 'Charlotte',
      imageUrl: '',
      pages: 532,
      annee: '1847',
      likes: 23,
    },
    {
      id: 13,
      title: 'The Picture of Dorian Gray',
      authorNom: 'Wilde',
      authorPrenom: 'Oscar',
      imageUrl: '',
      pages: 254,
      annee: '1890',
      likes: 23,
    },
  ];

  authors: Personne[] = [
    {
      id: 1,
      nom: 'Eco',
      prenom: 'Umberto',
      age: 84,
      bio: 'Umberto Eco était un écrivain, sémioticien, philosophe et linguiste italien. Il est notamment connu pour son roman "Le Nom de la rose".',
      imageUrl: 'url_image_eco',
      nombreLivre: 15,
    },
    {
      id: 2,
      nom: 'King',
      prenom: 'Stephen',
      age: 74,
      bio: 'Stephen King est un écrivain américain connu pour ses romans d\'horreur et de fantastique. "The Shining" est l\'un de ses romans célèbres.',
      imageUrl: 'url_image_king',
      nombreLivre: 60,
    },
    {
      id: 3,
      nom: 'Doctorow',
      prenom: 'E. L.',
      age: 84,
      bio: 'E. L. Doctorow était un romancier américain et éditeur. Il est notamment connu pour son roman "Ragtime".',
      imageUrl: 'url_image_doctorow',
      nombreLivre: 12,
    },
    {
      id: 4,
      nom: 'Orwell',
      prenom: 'George',
      age: 46,
      bio: 'George Orwell était un écrivain anglais, auteur de "1984" et "La Ferme des animaux", des œuvres majeures de la littérature dystopique.',
      imageUrl: 'url_image_orwell',
      nombreLivre: 7,
    },
    {
      id: 5,
      nom: 'Lee',
      prenom: 'Harper',
      age: 89,
      bio: 'Harper Lee était une romancière américaine surtout connue pour son roman "To Kill a Mockingbird", publié en 1960.',
      imageUrl: 'url_image_lee',
      nombreLivre: 2,
    },
    {
      id: 6,
      nom: 'Salinger',
      prenom: 'J.D.',
      age: 91,
      bio: 'J.D. Salinger était un écrivain américain. Son roman le plus célèbre est "The Catcher in the Rye".',
      imageUrl: 'url_image_salinger',
      nombreLivre: 4,
    },
    {
      id: 7,
      nom: 'Austen',
      prenom: 'Jane',
      age: 41,
      bio: 'Jane Austen était une romancière anglaise, connue pour ses œuvres telles que "Pride and Prejudice" et "Sense and Sensibility".',
      imageUrl: 'url_image_austen',
      nombreLivre: 6,
    },
    {
      id: 8,
      nom: 'Fitzgerald',
      prenom: 'F. Scott',
      age: 44,
      bio: 'F. Scott Fitzgerald était un romancier américain, célèbre pour "The Great Gatsby".',
      imageUrl: 'url_image_fitzgerald',
      nombreLivre: 5,
    },
    {
      id: 9,
      nom: 'Melville',
      prenom: 'Herman',
      age: 72,
      bio: 'Herman Melville était un romancier américain. Il est surtout connu pour son roman "Moby-Dick".',
      imageUrl: 'url_image_melville',
      nombreLivre: 10,
    },
    {
      id: 10,
      nom: 'Huxley',
      prenom: 'Aldous',
      age: 69,
      bio: 'Aldous Huxley était un écrivain et philosophe anglais, auteur de "Brave New World".',
      imageUrl: 'url_image_huxley',
      nombreLivre: 8,
    },
    {
      id: 11,
      nom: 'Tolkien',
      prenom: 'J.R.R.',
      age: 81,
      bio: 'J.R.R. Tolkien était un philologue et écrivain anglais. Il est l\'auteur de "The Lord of the Rings".',
      imageUrl: 'url_image_tolkien',
      nombreLivre: 14,
    },
    {
      id: 12,
      nom: 'Brontë',
      prenom: 'Charlotte',
      age: 38,
      bio: 'Charlotte Brontë était une romancière et poétesse anglaise, célèbre pour "Jane Eyre".',
      imageUrl: 'url_image_bronte',
      nombreLivre: 5,
    },
    {
      id: 13,
      nom: 'Wilde',
      prenom: 'Oscar',
      age: 46,
      bio: 'Oscar Wilde était un écrivain, poète et dramaturge irlandais, connu pour "The Picture of Dorian Gray".',
      imageUrl: 'url_image_wilde',
      nombreLivre: 7,
    },
  ];

  showAddForm = false;
 // selectedBook!: Book;

  book!: Book;
  selectedBook: Book | undefined;

  selectBook(bookId: number) {
    this.selectedBook = this.liste.find(
      (book) => book.id === bookId
    );
  }

  edit(item: Book) {
    const index = this.liste.findIndex((l) => l.id === item.id);
    if (index !== -1) {
      this.liste[index] = item;
    }
  }


  addItem(item: Book) {
    const id = this.liste[this.liste.length - 1].id;
    if (id !== undefined) {
      const newId = id + 1;
      item.id = newId;
      this.liste.push(item);
      this.closeAddForm();
    }
  }

  private closeAddForm() {
    this.showAddForm = false;
  }
}
