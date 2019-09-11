import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '../common/common.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaDiscountDisplayComponent } from './discount/discountDisplay.component';
import { PaDiscountEditorComponent } from './discount/discountEditor.component';
import { ProductFormComponent } from './productForm/productForm.component';
import { ProductTableComponent } from './productTable/productTable.component';
import { PaToggleView } from './toggleView/toggleView.component'

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
  declarations: [PaDiscountDisplayComponent, PaDiscountEditorComponent, ProductFormComponent, ProductTableComponent, PaToggleView],
  exports: [ProductTableComponent, ProductFormComponent]
})
export class ComponentsModule {}
