import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from "../product.model";

// Component for rendering all ProductRows and storing the currently selected Product.
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  // These will be implemented soon...
  // TODO tomorrow Sun
  @Input() productList!: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct!: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }
}
