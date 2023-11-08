import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../interfaces/users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser = new EventEmitter<number>();

  @Output()
  editUser = new EventEmitter<number>();

  displayedColumns = ['Id', 'Nombres', 'Email', 'Actions'];

  constructor(private router: Router) {}

  // Metodo Ruta Dinamica (detalle Jugador)
  goToDetail(userId: number): void {
    this.router.navigate(['dashboard', 'usuarios', 'detail', userId]);
  }
}
