import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { FormComponent } from './core/form/form.component';
import { NotFoundComponent } from './core/notFound.component';
import { ProductCountComponent } from './core/productCount.component';
import { CategoryCountComponent } from './core/categoryCount.component';
import { ModelResolver } from "./model/model.resolver";
import { TermGuard } from "./terms.guard";
import { UnsavedGuard } from './core/unsaved.guard';
import { LoadGuard } from "./load.guard";

const childRoutes: Routes = [
  { path: "",
    canActivateChild: [TermGuard],
    children: [{ path: 'products', component: ProductCountComponent },
               { path: 'categories', component: CategoryCountComponent },
               { path: '', component: ProductCountComponent }],
               resolve: { model: ModelResolver }
  }
]

const routes: Routes = [
  {
    path: 'ondemand',
    loadChildren: './ondemand/ondemand.module#OnDemandModule',
    canLoad: [LoadGuard]
  },
  {
    path: 'form/:mode/:id', component: FormComponent,
    resolve: { model: ModelResolver },
    canDeactivate: [UnsavedGuard]
  },
  {
    path: 'form/:mode', component: FormComponent,
    resolve: { model: ModelResolver},
    canActivate: [TermGuard]
  },
  { path: 'table', component: TableComponent, children: childRoutes },
  { path: 'table/:category', component: TableComponent, children: childRoutes},
  { path: '', redirectTo: '/table', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
]

export const routing = RouterModule.forRoot(routes);
