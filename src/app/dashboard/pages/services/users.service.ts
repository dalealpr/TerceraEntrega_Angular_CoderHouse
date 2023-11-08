import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../users/interfaces/users';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  usuarios: User[] = [
    {
      id: 1,
      nombre: 'David',
      apellido: 'Leal',
      email: 'david@mail.com',
      token: 'asdfghjkl123456',
      role: 'ADMIN',
    },
    {
      id: 2,
      nombre: 'Juan',
      apellido: 'Perez',
      email: 'juan@mail.com',
      token: 'asdfghjkl123456',
      role: 'USER',
    },
    {
      id: 3,
      nombre: 'Pedro',
      apellido: 'Ramirez',
      email: 'pedro@mail.com',
      token: 'asdfghjkl123456',
      role: 'USER',
    },
  ];

  // Mostrar jugadores
  getUsers$(): Observable<User[]> {
    return of(this.usuarios);
  }
  // Crear nuevo jugador
  createUser$(payload: User): Observable<User[]> {
    this.usuarios.push(payload);
    return of([...this.usuarios]);
  }

  // Editar jugador
  editUser$(id: number, payload: User): Observable<User[]> {
    this.usuarios = this.usuarios.map((usuario) =>
      usuario.id === id ? { ...usuario, ...payload } : usuario
    );
    return of(this.usuarios);
  }

  //Eliminar jugador
  deleteUser$(id: number): Observable<User[]> {
    this.usuarios = this.usuarios.filter((usuario) => usuario.id !== id);
    return of(this.usuarios);
  }

  // Encontrar jugador mediante Id
  getUserById$(id: number): Observable<User | undefined> {
    return of(this.usuarios.find((usuario) => usuario.id === id));
  }
}
