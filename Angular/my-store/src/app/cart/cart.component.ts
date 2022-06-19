import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Product[] = [];
  @Output() buyer_name: EventEmitter<string> = new EventEmitter;
  @Output() order_total: EventEmitter<number> = new EventEmitter;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  clearCartItems(): void {
    this.cartService.clearCartItems();
    this.cartItems = [];
    alert("Cleared!");
  }

  addToCart(item: Product): void{
    this.cartService.addToCartItems(item);
    alert("Product added!");
  }
}
