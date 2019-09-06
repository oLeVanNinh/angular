import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaAttrDirective } from './directives/attr.directive';
import { PaModel } from './directives/twoway.directive';

// import { AppComponent } from './app.component';
import { ProductComponent } from './component/component';

@NgModule({
  declarations: [
    ProductComponent, PaAttrDirective, PaModel
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
