import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from '../not-found/not-found.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
];

export const DashboardRoutes = RouterModule.forChild(routes);
