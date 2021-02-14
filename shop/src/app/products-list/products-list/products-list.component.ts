import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../product/product.model';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  @Input()
  productsList: Product[];

  @Output()
  onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() { 
    this.onProductSelected = new EventEmitter(); 
  }

  ngOnInit(): void {
  }

  clicked(product: Product) {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product) {
    if(!product) {
      return false;
    }
    return product.sku;
  }
}
