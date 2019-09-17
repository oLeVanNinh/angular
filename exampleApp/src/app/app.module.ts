import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModelModule } from './model/model.module';
import { CoreModule } from './core/core.module';
import { MessageModule } from './messages/message.module';
import { routing } from './app.routing';
import { TermGuard } from "./terms.guard";
import { LoadGuard } from "./load.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserModule, ModelModule, CoreModule, MessageModule, routing, BrowserAnimationsModule
  ],
  declarations: [AppComponent],
  providers: [TermGuard, LoadGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
