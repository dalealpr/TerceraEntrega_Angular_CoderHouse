import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/interfaces/users';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../interfaces/login';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/dashboard/pages/services/notifier.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // almacenamiento user autenticado
  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(
    private httClient: HttpClient,
    private router: Router,
    private notifService: NotifierService
  ) {}

  // Login
  login(payload: LoginPayload): void {
    this.httClient
      .get<User[]>(
        `${environment.baseUrl}users?email=${payload.email}&password=${payload.password}`
      )
      .subscribe({
        next: (response) => {
          if (!response.length) {
            this.notifService.showErrorNotif(
              'Error al iniciar sesión',
              `Sus credenciales no son válidas`
            );
            console.log('Error inicio de sesion');
          } else {
            const authUser = response[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            this.router.navigate(['dashboard/home']);
            console.log('Inicio de sesion exitoso');
          }
        },
        error: (err) => {
          alert('Error de conexion');
        },
      });
  }
  // Verificar token
  verifyToken(): Observable<boolean> {
    return this.httClient
      .get<User[]>(
        `${environment.baseUrl}users?token=${localStorage.getItem('token')}`
      )
      .pipe(
        map((users) => {
          if (!users.length) {
            return false;
          } else {
            const authUser = users[0];
            this._authUser$.next(authUser);
            localStorage.setItem('token', authUser.token);
            return true;
          }
        })
      );
  }
  // Logout
  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
