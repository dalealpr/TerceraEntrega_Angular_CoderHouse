import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UsersDetailComponent } from './components/users-detail/users-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        // /usuarios
        path: '',
        component: UsersComponent,
      },
      {
        path: 'detail/:id',
        component: UsersDetailComponent,
      },
    ]),
  ],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class UsersRoutingModule {}
