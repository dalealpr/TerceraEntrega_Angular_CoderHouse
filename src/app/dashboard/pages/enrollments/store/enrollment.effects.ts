import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Enrollment } from '../interface/enrollment';

@Injectable()
export class EnrollmentEffects {
  loadOnrollments$ = createEffect(() => {
    return this.actions$.pipe(
      // Filtra las acciones que sean (OnrollmentActions.loadOnrollments)
      ofType(EnrollmentActions.loadEnrollments),
      // concatena un obs con otro obs
      concatMap(() =>
        this.getEnrollments().pipe(
          // Si la peticion sale bine dispara la accion
          map((data) => EnrollmentActions.loadEnrollmentsSuccess({ data })),
          // Si la peticion sale mal dispara la accion
          catchError((error) =>
            of(EnrollmentActions.loadEnrollmentsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>(
      `${environment.baseUrl}enrollments?_expand=user&_expand=player&_expand=equipo`
    );
  }
}
