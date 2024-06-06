import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app.layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
  { path : '', component : AppLayoutComponent, 
    children : [
      { path: '', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
    ],
  },
  { path: 'auth', loadChildren: () => import('./pages/Auth/Auth.module').then(m => m.AuthModule) },
  
  { path: 'notfound', component: NotFoundComponent },
  { path: '**', redirectTo: 'notfound'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
