import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product: Product;
  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      quantity: 1,
      description: ''
    }
  }

  ngOnInit(): void {
  }
  upvote(product: Product): Product{
      product.quantity += 1;
      return product;
    }
  downvote(product: Product): Product{
      product.quantity -= 1;
      return product;
    }
}
