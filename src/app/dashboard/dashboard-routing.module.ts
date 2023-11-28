import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';
import { adminGuard } from '../core/guards/admin.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      // /dashboard
      {
        path: '', // /dashboard
        component: DashboardComponent,
        children: [
          {
            path: 'home', // dashboard/home
            component: HomeComponent,
          },
          {
            path: 'jugadores',
            loadChildren: () =>
              import('./pages/jugadores/jugadores.module').then(
                (archivo) => archivo.JugadoresModule
              ),
          },
          {
            path: 'usuarios',
            canActivate: [adminGuard],
            loadChildren: () =>
              import('./pages/users/users.module').then(
                (archivo) => archivo.UsersModule
              ),
          },
          {
            path: 'equipos',
            loadChildren: () =>
              import('./pages/equipos/equipos.module').then(
                (archivo) => archivo.EquiposModule
              ),
          },
          {
            path: 'enrollments',
            loadChildren: () =>
              import('./pages/enrollments/enrollments.module').then(
                (m) => m.EnrollmentsModule
              ),
          },
          {
            path: '**',
            redirectTo: 'home',
          },
        ],
      },
    ]),
  ],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
