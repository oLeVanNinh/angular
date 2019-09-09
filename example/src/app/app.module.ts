import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './directives/attr.directive';
import { PaModel } from './directives/twoway.directive';
import { PaStructureDirective } from './directives/structure.derective';
import { PaIteratorDirective } from './directives/iterator.directive';
import { PaCellColor } from './directives/cellColor.directive';
import { PaCellColorSwitcher } from './directives/cellColorSwitcher.directive';
import { ProductTableComponent } from './component/productTable/productTable.component';
import { ProductFormComponent } from './component/productForm/productForm.component';
import { PaToggleView } from './component/toggleView/toggleView.component';
import { PaAddTaxPipe } from './pipes/addTax.pipe';
import { PaCategoryFilterPipe } from './pipes/categoryFilter.pipe';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component/component';

@NgModule({
  declarations: [
    ProductComponent, PaAttrDirective, PaModel, PaStructureDirective, PaIteratorDirective, PaCellColor, PaCellColorSwitcher, ProductTableComponent,
    ProductFormComponent, PaToggleView, PaAddTaxPipe, PaCategoryFilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
