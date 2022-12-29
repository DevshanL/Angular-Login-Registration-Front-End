import { Component } from '@angular/core';

interface Book {
  name: string;
  author: string;
  image: string;
  amount: number; 
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  books: Book[] = [
    {
      name: 'Clean Code',
      author: 'Robert C Martin',
      image:
        'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
      amount: 700,
    },
    {
      name: 'Pragmatic Programmer',
      author: 'David Thomas',
      image:
        'https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg',
      amount: 800,
    },
    {
      name: 'Art of Computer Programming',
      author: 'Donald Knuth',
      image:
        'https://m.media-amazon.com/images/I/41YakMLJktL._SY429_BO1,204,203,200_.jpg',
      amount: 500,
    },
  ];

  isShowing: boolean = true;
}
