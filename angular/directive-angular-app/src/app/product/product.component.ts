import { Component } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    {productId: 11, productName: "Monitor", productDescription: "Monitor Description",productPrice: 12000},
    {productId: 12, productName: "Keyboard", productDescription: "Keyboard Description",productPrice: 2000},
    {productId: 13, productName: "Mouse", productDescription: "Mouse Description",productPrice: 800},
    {productId: 14, productName: "GPU", productDescription: "GPU Description",productPrice: 20000},

  ]
}
