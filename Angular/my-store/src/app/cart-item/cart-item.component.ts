import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }
  setValue() {
      this.name = 'Nancy';
    }
}
