import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../pages/users/interfaces/users';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public authUser$: Observable<User | null>;

  userRole$: Observable<'ADMIN' | 'EMPLOYEE' | undefined>;

  constructor(private authService: AuthService, private store: Store) {
    this.authUser$ = this.authService.authUser$;
    this.userRole$ = this.store
      .select(selectAuthUser)
      .pipe(map((u) => u?.role));
  }

  // traer nombre User
  get fullName$(): Observable<string> {
    return this.authUser$.pipe(
      map((user) => `${user?.nombre} ${user?.apellido}`)
    );
  }
  // traer Email User
  get email$(): Observable<string | undefined> {
    return this.authUser$.pipe(map((user) => user?.email));
  }
}
