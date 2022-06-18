import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Product[] = [];

  constructor() { }
  
  getCartItems() {
    return this.cartItems;
  }
  addToCartItems(item: Product) {
    this.cartItems.push(item);
    return this.cartItems;
  }
  clearCartItems() {
    this.cartItems = [];
    return this.cartItems;
  }
}
