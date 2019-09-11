import { Component, Output, EventEmitter, ViewEncapsulation, Inject, SkipSelf } from '@angular/core';
import { Product } from '../../model/product.model';
import { ProductFormGroup } from '../../model/form.model';
import { Model } from '../../model/repository.model';
import { VALUE_SERVICE } from '../../directives/valueDisplay.directive';

@Component({
  selector: 'paProductForm',
  templateUrl: 'productForm.component.html',
  viewProviders: [{provide: VALUE_SERVICE, useValue: 'Oranges'}]
  // styleUrls: ['productForm.component.css'],
  // encapsulation: ViewEncapsulation.Emulated
})

export class ProductFormComponent {
  form: ProductFormGroup = new ProductFormGroup();
  newProduct: Product = new Product();
  formSumitted: boolean = false;

  @Output('paNewProduct') newProductEvent = new EventEmitter<Product>();

  constructor(private model: Model, @Inject(VALUE_SERVICE) @SkipSelf() private serviceValue: string) {
  }

  submitForm(form: any) {
    this.formSumitted = true;
    if (form.valid) {
      // this.newProductEvent.emit(this.newProduct);
      this.model.saveProduct(this.newProduct);
      this.newProduct = new Product();
      this.form.reset();
      this.formSumitted = false;
    }
  }
}
