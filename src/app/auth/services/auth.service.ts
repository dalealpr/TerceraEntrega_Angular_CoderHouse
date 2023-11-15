import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/interfaces/users';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../interfaces/login';
import { Router } from '@angular/router';
import { NotifierService } from 'src/app/dashboard/pages/services/notifier.service';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/store/auth/auth.actions';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authUser$ = this.store.select(selectAuthUser);

  constructor(
    private httClient: HttpClient,
    private router: Router,
    private notifService: NotifierService,
    private store: Store
  ) {}

  private handleAuthUser(authUser: User) {
    this.store.dispatch(AuthActions.setAuthUser({ data: authUser }));
    localStorage.setItem('token', authUser.token);
  }
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

            this.handleAuthUser(authUser);

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
            this.handleAuthUser(authUser);
            return true;
          }
        })
      );
  }
  // Logout
  logout(): void {
    this.store.dispatch(AuthActions.resetState());
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}
