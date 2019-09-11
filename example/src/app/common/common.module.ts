import { NgModule } from '@angular/core';
import { PaAttrDirective } from './directives/attr.directive';
import { PaCellColor } from './directives/cellColor.directive';
import { PaCellColorSwitcher } from './directives/cellColorSwitcher.directive';
import { PaDiscountAmountDirective } from './directives/discountAmount.directive';
import { PaIteratorDirective } from './directives/iterator.directive';
import { PaStructureDirective } from './directives/structure.derective';
import { PaModel } from './directives/twoway.directive';
import { VALUE_SERVICE, PaDisplayValue } from './directives/valueDisplay.directive';
import { PaAddTaxPipe } from './pipes/addTax.pipe';
import { PaCategoryFilterPipe } from './pipes/categoryFilter.pipe';
import { PaDiscountPipe } from './pipes/discount.pipe';
import { DiscountService } from '../services/discount.service';
import { LogService } from '../services/log.service';
import { ModelModule } from '../model/model.module';

@NgModule({
  imports: [ModelModule],
  providers: [LogService, DiscountService, {provide: VALUE_SERVICE, useValue: 'Apples'}],
  declarations: [PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe, PaCellColor, PaCellColorSwitcher, PaDiscountPipe, PaModel, PaDisplayValue,
    PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective],
  exports: [PaAddTaxPipe, PaAttrDirective, PaCategoryFilterPipe, PaCellColor, PaCellColorSwitcher, PaDiscountPipe, PaModel, PaDisplayValue,
    PaDiscountAmountDirective, PaIteratorDirective, PaStructureDirective],
})

export class CommonModule { }
