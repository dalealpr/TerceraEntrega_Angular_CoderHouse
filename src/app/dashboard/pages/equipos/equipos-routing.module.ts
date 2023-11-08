import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EquiposComponent } from './equipos.component';
import { EquiposDetailComponent } from './components/equipos-detail/equipos-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /equipos
        path: '',
        component: EquiposComponent,
      },
      {
        path: 'detail/:id',
        component: EquiposDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class EquiposRoutingModule {}
