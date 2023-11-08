import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JugadoresComponent } from './jugadores.component';
import { JugadoresDetailComponent } from './components/jugadores-detail/jugadores-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /jugadores
        path: '',
        component: JugadoresComponent,
      },
      {
        path: 'detail/:id',
        component: JugadoresDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class JugadoresRoutingModule {}
