import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../../pages/users/interfaces/users';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  public authUser$: Observable<User | null>;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
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
