import { Component, OnInit } from '@angular/core';

import { products } from '../../../data/products';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  title = 'Product List';
  products : Product[] = products;
  isUnchanged = true;
  buttonTxt = 'Enable';

  constructor() { }

  ngOnInit(): void {

  }

  clickMe(product : Product) {
    window.alert(product.name + 'Course videos are available in your location to purchase');
  }

  enableBuying() {
    this.isUnchanged  = !this.isUnchanged;
    this.isUnchanged ? this.buttonTxt = 'Enable' : this.buttonTxt = 'Disable';
  }

}
