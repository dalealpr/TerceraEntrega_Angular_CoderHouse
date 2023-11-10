import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthService } from './auth.service';
import { User } from 'src/app/dashboard/pages/users/interfaces/users';
import { environment } from 'src/environments/environment.local';
import { MockProvider } from 'ng-mocks';
import { Router } from '@angular/router';

describe('AuthService', () => {
  let authService: AuthService;
  let httpController: HttpTestingController;
  beforeEach(() => {
    // Copia del modulo
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [MockProvider(Router)],
    });
    authService = TestBed.inject(AuthService);
    httpController = TestBed.inject(HttpTestingController);
  });

  // Existe el servicio
  it('Deberia definir el servicio "AuthService"', () => {
    expect(authService).toBeTruthy();
  });

  // login
  it('Debe establecer un usuario autenticdo al llamar a "Login"', () => {
    const USER_MOCK: User = {
      id: 4,
      nombre: 'admin',
      apellido: 'admin',
      email: 'fake@mail.com',
      token: 'asdfghjkl123456',
      role: 'ADMIN',
      password: '123654',
    };
    authService.login({
      email: USER_MOCK.email,
      password: USER_MOCK.password,
    });

    // Peticion HTTP
    httpController
      .expectOne({
        method: 'GET',
        url: `${environment.baseUrl}users?email=${USER_MOCK.email}&password=${USER_MOCK.password}`,
      })

      .flush([USER_MOCK]);

    authService.authUser$.subscribe({
      next: (authUser) => {
        console.log(authUser);
        expect(authUser).toBeTruthy();
        //El usuario que mando debe ser igual al que recibo
        expect(authUser).toEqual(USER_MOCK);
      },
    });
  });
});
