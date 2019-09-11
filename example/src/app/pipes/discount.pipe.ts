import { Pipe, Injectable } from '@angular/core';
import { DiscountService } from '../services/discount.service';
import { LogService, LogLevel } from '../services/log.service';

@Pipe({
  name: 'discount',
  pure: false
})

export class PaDiscountPipe {
  constructor(private discount: DiscountService, private logger: LogService) {}

  transform(price: number): number {
    this.logger.minimumLevel = LogLevel.DEBUG
    if (price > 100) {
      this.logger.logErrorMessage(`Large price discounted: ${price}`)
    }
    return this.discount.applyDiscount(price);
  }
}
