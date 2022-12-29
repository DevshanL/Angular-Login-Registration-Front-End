import { Component } from '@angular/core';

interface Book {
  name:string
  author:string
  image:string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class
 BooksComponent {
  books:Book[] = [
    {
  name:'Clean Code',
  author:  'Robert C Martin',
  image:
    'https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg',
 },
 {
  name:'Pragmatic Programmer',
  author: 'David Thomas',
  image:
    'https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg',
 }
];
 

  isShowing: boolean = true;

 
}
