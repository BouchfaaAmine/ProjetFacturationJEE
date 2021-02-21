import { SuppliersComponent } from './suppliers/suppliers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'suppliers', component: SuppliersComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
