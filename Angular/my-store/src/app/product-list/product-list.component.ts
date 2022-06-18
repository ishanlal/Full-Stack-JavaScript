import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { CartService } from '../services/cart.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  quant: number = 1;
  @Output () addProductToCart: EventEmitter<Product> = new EventEmitter;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      for(let index = 0; index<res.length ;index++){
        const product = res[index];
        product["quantity"] = 1;
      }
      this.products = res;
    })
  }

  /*addToCart(product: Product): void{
    this.addProductToCart.emit(product);
    alert("Product added!");
  }*/

  /*addToCartItems(item: Product): void{
    this.cartService.addToCartItems(item);
    alert("Added!");
  }*/

}
