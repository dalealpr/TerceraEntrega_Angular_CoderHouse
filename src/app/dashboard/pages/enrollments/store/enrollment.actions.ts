import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Enrollment } from '../interface/enrollment';

export const EnrollmentActions = createActionGroup({
  source: 'Enrollment',
  events: {
    'Load Enrollments': emptyProps(),
    'Load Enrollments Success': props<{ data: Enrollment[] }>(),
    'Load Enrollments Failure': props<{ error: unknown }>(),
  },
});
