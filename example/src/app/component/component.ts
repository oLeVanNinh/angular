import { ApplicationRef, Component } from '@angular/core';
import { Model } from '../model/repository.model';
import { Product } from '../model/product.model';
import { NgForm } from '@angular/forms';
import { ProductFormGroup } from '../model/form.model';

@Component({
  selector: 'app',
  templateUrl: 'template.html',
  styleUrls: ['component.css']
})

export class ProductComponent {
  model: Model = new Model();

  addProduct(p: Product) {
    this.model.saveProduct(p);
  }
}
