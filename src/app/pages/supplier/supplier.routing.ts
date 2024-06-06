import { Routes, RouterModule } from '@angular/router';
import { SupplierComponent } from './supplier.component';

const routes: Routes = [
  { path: '', component: SupplierComponent },
];

export const SupplierRoutes = RouterModule.forChild(routes);
