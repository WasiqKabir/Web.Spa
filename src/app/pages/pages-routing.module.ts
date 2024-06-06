import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: 'product', loadChildren: () => import('./product/product.module').then(m => m.ProductModule) },
    { path: 'supplier', loadChildren: () => import('./supplier/supplier.module').then(m => m.SupplierModule)},
    { path: '**', redirectTo: '/notfound' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
