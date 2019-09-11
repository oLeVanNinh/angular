import { NgModule, PipeDecorator } from '@angular/core';
import { SimpleDataSource } from './static.datasource';
import { Model } from './repository.model';

@NgModule({
  providers: [Model, SimpleDataSource]
})

export class ModelModule {}
