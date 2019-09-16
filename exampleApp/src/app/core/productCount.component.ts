import { Component, KeyValueDiffer, KeyValueDiffers, ChangeDetectorRef } from "@angular/core";
import { Model } from '../model/repository.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'paProductCount',
  template: `<div class="bg-info text-white p-2">There are {{count}} products</div>`
})

export class ProductCountComponent {
  private differ: KeyValueDiffer<any, any>;
  count: number = 0;
  private catetory: string;

  constructor(private model: Model, private keyValueDiffers: KeyValueDiffers, private changeDetector: ChangeDetectorRef, activeRoute: ActivatedRoute) {
    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
      if (params['category'] != null) {
        this.catetory = params['category'];
        this.updateCount();
      }
    }))
  }

  ngOnInit() {
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create();
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts().filter(p => this.catetory == null || p.category == this.catetory).length;
  }
}
