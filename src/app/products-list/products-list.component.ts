import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Product} from "../product.model";

// Component for rendering all ProductRows and storing the currently selected Product.
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html',
})
export class ProductsListComponent {
<<<<<<< HEAD
  // Inputs / Outputs
  @Input() productList!: Product[];
=======
>>>>>>> 4a7a796105da4e9daae53300353e35570f3398dc

  @Input() productList!: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct!: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean{
    if(!product || !this.currentProduct){
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }
}
