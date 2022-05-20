import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from "../product.model";

// Component for rendering all ProductRows and storing the currently selected Product.
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
  // These will be implemented soon.
  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

}
