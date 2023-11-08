import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';
import { User } from './interfaces/users';
import { Observable } from 'rxjs';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  n: number = 0;
  usuarios$: Observable<User[]>;

  constructor(
    private matDialog: MatDialog,
    private userService: UsersService,
    private notifService: NotifierService
  ) {
    // Mostrar usuarios
    this.usuarios$ = this.userService.getUsers$();
  }

  //METODO AGREGAR USUARIO
  addUser(): void {
    // Dialog
    this.matDialog
      .open(UsersDialogComponent, {
        height: '420px',
        width: '700px',
      })
      .afterClosed()
      // suscripción
      .subscribe({
        next: (result) => {
          if (result) {
            this.usuarios$ = this.userService.createUser$({
              id: 4 + this.n,
              nombre: result.nombre,
              apellido: result.apellido,
              email: result.email,
              token: result.token,
              role: result.token,
            });
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
        height: '420px',
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
