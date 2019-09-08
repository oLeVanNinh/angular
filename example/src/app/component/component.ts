import { ApplicationRef, Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from '../model/form.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html'
})

export class ProductComponent {
  targetName: string = "Kayak";
  selectedProduct: string;
  model: Model = new Model();
  newProduct: Product = new Product();
  formSubmitted: boolean = false;
  form: ProductFormGroup = new ProductFormGroup();
  showTable: boolean = true;
  darkColor: boolean = false;

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
    return this.getProducts().length;
  }

  getKey(index: number, product: Product) {
    return product.id;
  }

  getSelectedProduct(product: Product) {
    return product.name == this.selectedProduct;
  }

  get jsonProduct() {
    return JSON.stringify(this.newProduct);
  }

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  getValidationMessages(state: any, thingName?: string) {
    let thing: string = state.path || thingName;
    let messages: string[] = [];

    if (state.errors) {
      for (let errorName in state.errors) {
        switch (errorName) {
          case "required":
            messages.push(`You muse enter a ${thing}`);
            break;
          case "minlength":
            messages.push(`A ${thing} must be at least ${state.errors['minlength'].requiredLength} characters`);
            break;
          case "pattern":
            messages.push(`The ${thing} contains illegal characters`);
            break;
        }
      }
    }
    return messages;
  }

  submitForm(form: NgForm) {
    this.formSubmitted = true;
    if (form.valid) {
      this.addProduct(this.newProduct);
      this.newProduct = new Product();
      form.reset();
      this.formSubmitted = false;
    }
  }
}
