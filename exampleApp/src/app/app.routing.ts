import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';

const routes: Routes = [
  { path: 'form/:mode/:id', component: FormComponent},
  { path: 'form/:mode', component: FormComponent },
  { path: '', component: TableComponent }
]

export const routing = RouterModule.forRoot(routes);
