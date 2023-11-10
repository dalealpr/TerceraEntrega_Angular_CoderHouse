import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { User } from './interfaces/users';
import { Observable } from 'rxjs';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { NotifierService } from '../services/notifier.service';
import { HttpClient } from '@angular/common/http';
import { generarStringRandom } from 'src/app/shared/helpers/token';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  n: number = 0;
  token: string = generarStringRandom(10);
  usuarios$: Observable<User[]>;

  constructor(
    private matDialog: MatDialog,
    private userService: UsersService,
    private notifService: NotifierService
  ) {
    // Mostrar usuarios
    this.usuarios$ = this.userService.getUsers$();
  }

  //METODO CREAR USUARIO
  addUser(): void {
    // Dialog
    this.matDialog
      .open(UsersDialogComponent, {
        height: '520px',
        width: '700px',
      })
      .afterClosed()
      // suscripción
      .subscribe({
        next: (result) => {
          if (!!result) {
            result.token = this.token;
            this.usuarios$ = this.userService.createUser$(result);
            this.n++;
          }
        },
      });
  }

  // METODO BORRAR USUARIO
  onDeleteUser(userId: number): void {
    this.usuarios$ = this.userService.deleteUser$(userId);
    this.notifService.showSuccessNotif(
      'Usuario Borrado',
      `El Usuario ha sido Borrado de la tabla`
    );
  }

  // METODO EDITAR USUARIO
  onEditUser(userId: number): void {
    // Dialog
    this.matDialog
      .open(UsersDialogComponent, {
        data: userId,
        height: '520px',
        width: '700px',
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.usuarios$ = this.userService.editUser$(userId, result);
          }
        },
      });
  }
}
