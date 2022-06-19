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
  addToCartItems(prod: Product) {
    let found = false;
    for (let i=0; i<this.cartItems.length ;i++){
      if(this.cartItems[i].id == prod.id){
        found = true;
        this.cartItems[i].quantity = prod.quantity;
      }
    }
    if(!found){
      this.cartItems.push(prod);
    }
    return this.cartItems;
  }
  clearCartItems() {
    this.cartItems = [];
    return this.cartItems;
  }
}
