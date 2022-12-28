import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  name:string = 'Clean Code';
  author:string = 'Robert C Martin';
  src:string = "https://m.media-amazon.com/images/I/41xShlnTZTL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg";
  
  name2:string = 'Pragmatic Programmer';
  author2:string = 'David Thomas';
  src2:string = "https://m.media-amazon.com/images/P/B07VRS84D1.01._SCLZZZZZZZ_SX500_.jpg";

  isDisabled:boolean = false;

  handleClick(){
    this.isDisabled = true;
  }

  myName: string='';

}
