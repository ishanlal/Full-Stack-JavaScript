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
  total: number = 0;
  full_name: string = '';
  st_addr: string = '';
  cc_num: number = 0;
  @Output() buyer_name: EventEmitter<string> = new EventEmitter;
  @Output() order_total: EventEmitter<number> = new EventEmitter;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  clearCartItems(): void {
    this.cartService.clearCartItems();
    this.total = this.cartService.getTotal();
    this.cartItems = [];
    alert("Cleared!");
  }

  addToCart(item: Product): void{
    this.cartService.addToCartItems(item);
    this.total = this.cartService.getTotal();
    alert("Product added!");
  }

  submitForm(){
    this.buyer_name.emit(this.full_name);
    this.order_total.emit(this.total);
  }
}
