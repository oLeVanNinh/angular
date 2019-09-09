import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductFormGroup } from '../../model/form.model';

@Component({
  selector: 'paProductForm',
  templateUrl: 'productForm.component.html',
  // styleUrls: ['productForm.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})

export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSumitted: boolean = false;

  @Output('paNewProduct') newProductEvent = new EventEmitter<Product>();

  submitForm(form: any) {
    this.formSumitted = true;
    if (form.valid) {
      this.newProductEvent.emit(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSumitted = false;
    }
  }
}
