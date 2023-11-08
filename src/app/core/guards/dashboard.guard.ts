import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

export const dashboardGuard: CanActivateFn = (route, state) => {
  // Ruta
  const router = inject(Router);
  const authService = inject(AuthService);
  return authService.verifyToken().pipe(
    map((isAuthenticated) => {
      return isAuthenticated ? true : router.createUrlTree(['/auth/login']);
    })
  );
};
