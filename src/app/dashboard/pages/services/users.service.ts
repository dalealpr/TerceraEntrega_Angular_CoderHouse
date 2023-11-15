import { Injectable } from '@angular/core';
import { Observable, concatMap } from 'rxjs';
import { User } from '../users/interfaces/users';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private httpClient: HttpClient) {}

  // Mostrar jugadores
  getUsers$(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${environment.baseUrl}users`);
  }
  // Crear nuevo Usuario
  createUser$(payload: User): Observable<User[]> {
    return this.httpClient
      .post<User>(`${environment.baseUrl}users`, payload)
      .pipe(concatMap(() => this.getUsers$()));
  }

  // Editar Usuario
  editUser$(userId: number, payload: User): Observable<User[]> {
    return this.httpClient
      .put<User>(`${environment.baseUrl}users/${userId}`, payload)
      .pipe(concatMap(() => this.getUsers$()));
  }

  //Eliminar Usuario
  deleteUser$(userId: number): Observable<User[]> {
    return this.httpClient
      .delete<User>(`${environment.baseUrl}users/${userId}`)
      .pipe(concatMap(() => this.getUsers$()));
  }

  // Encontrar Usuario mediante Id
  getUserById$(id: number): Observable<User[]> {
    return this.httpClient
      .get<User>(`${environment.baseUrl}users/${id}`)
      .pipe(concatMap(() => this.getUsers$()));
  }
}
