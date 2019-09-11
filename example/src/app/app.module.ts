import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTableComponent } from './component/productTable/productTable.component';
import { ProductFormComponent } from './component/productForm/productForm.component';
import { ModelModule } from './model/model.module';
import { ComponentsModule } from './component/component.module';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component/component';
import { CommonModule } from './common/common.module';


@NgModule({
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, ModelModule, CommonModule, ComponentsModule
  ],
  bootstrap: [ProductFormComponent, ProductTableComponent]
})
export class AppModule { }
