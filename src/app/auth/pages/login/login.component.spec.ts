import { TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { provideMockStore } from '@ngrx/store/testing';

describe('LoginComponent', () => {
  let loginComponent: LoginComponent;

  beforeEach(() => {
    // Copia del modulo
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientTestingModule, SharedModule],
      providers: [provideMockStore({})],
    });
    loginComponent = TestBed.createComponent(LoginComponent).componentInstance;
  });
  // Creacion del componente
  it('Deberia crear el componente Login', () => {
    expect(loginComponent).toBeTruthy();
  });
  // Formulario Login invalido
  it('Debe marcar todos los campos del form Login como "touched" si es invalido', () => {
    loginComponent.loginForm.patchValue({
      email: 'asdfghjk',
      password: '0000',
    });
    loginComponent.login();
    expect(loginComponent.emailControl.touched).toBeTrue();
    expect(loginComponent.passwordControl.touched).toBeTrue();
  });
  // Formulario Login valido
  it('Debe llamar al metodo "Login" del AuthService si el formulario es valido', () => {
    loginComponent.loginForm.patchValue({
      email: 'fake@mail.com',
      password: '123654',
    });
    //Espia metodo login
    const spyOnAuthServiceLogin = spyOn(
      (loginComponent as any).authService,
      'login'
    );
    loginComponent.login();
    expect(spyOnAuthServiceLogin).toHaveBeenCalled();
  });
});
