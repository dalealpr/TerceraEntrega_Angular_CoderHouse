import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private authService: AuthService) {}
  @Output()
  toggleSidebar = new EventEmitter();

  // Logout
  logout(): void {
    this.authService.logout();
  }
}
