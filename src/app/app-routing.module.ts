import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { dashboardGuard } from './core/guards/dashboard.guard';

const routes: Routes = [
  {
    path: 'dashboard',
    // Ruta protegida (guard)
    canActivate: [dashboardGuard],
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(
        (archivo) => archivo.DashboardModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth.module').then((archivo) => archivo.AuthModule),
  },
  // {
  //   path: 'auth',
  //   component: AuthComponent,
  // },
  {
    path: '**',
    component: AuthComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
