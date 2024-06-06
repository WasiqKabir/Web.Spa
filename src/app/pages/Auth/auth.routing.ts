import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'error', loadChildren : () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'access', loadChildren: () => import('./access/access.module').then(m => m.AccessModule)},
  { path: '**', redirectTo : '/notfound'}
];

export const AuthRoutes = RouterModule.forChild(routes);
