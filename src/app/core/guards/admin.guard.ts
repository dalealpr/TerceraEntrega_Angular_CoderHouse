import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = (route, state) => {
  const store = inject(Store);
  const router = inject(Router);

  return store.select(selectAuthUser).pipe(
    map((usuario) => {
      if (usuario?.role !== 'ADMIN') {
        return router.createUrlTree(['/dashboard/home']);
      } else {
        return true;
      }
    })
  );
};
