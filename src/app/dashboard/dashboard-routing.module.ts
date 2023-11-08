import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './dashboard.component';

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
