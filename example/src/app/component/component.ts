import { ApplicationRef, Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})

export class ProductComponent {
  model: Model = new Model();

  constructor(ref: ApplicationRef) {
    (<any>window).appRef = ref;
    (<any>window).model = this.model;
  }

  getProductByPosition(position: number) {
    return this.model.getProducts()[position]
  }

  getClassesByPosition(position: number): string {
    let product = this.getProductByPosition(position);
    return "p-2 " + (product.price < 50 ? "bg-info" : "bg-warning")
  }

  getProduct(key: number): Product{
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProductCount(): number {
    console.log("getProduct Invoked");
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  targetName: string = "Kayak"
}
