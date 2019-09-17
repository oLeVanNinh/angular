import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { OnDemandComponent } from "./ondemand.component";
import { RouterModule } from "@angular/router";
import { FirstComponent } from './first.component';
import { SecondComponent } from "./second.component";

let routing = RouterModule.forChild([
  {
    path: "", component: OnDemandComponent,
    children: [
      {
        path: "",
        children: [
          { outlet: 'primary', path: '', component: FirstComponent },
          { outlet: 'left', path: '', component: SecondComponent },
          { outlet: 'right', path: "", component: SecondComponent }
        ]
      },
      {
        path: "swap",
        children: [
          { outlet: "primary", path: "", component: SecondComponent },
          { outlet: 'left', path: '', component: FirstComponent },
          { outlet: 'right', path: '', component: FirstComponent },
        ]
      }
    ]
  }
])

@NgModule({
  imports: [CommonModule, routing],
  declarations: [OnDemandComponent, FirstComponent, SecondComponent],
  exports: [OnDemandComponent]
})

export class OnDemandModule {}
