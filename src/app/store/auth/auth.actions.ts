import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from 'src/app/dashboard/pages/users/interfaces/users';

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    // Accion Establecer usuario
    'Set Auth User': props<{ data: User }>(),
    // Accion Limpiar usuario
    'Reset state': emptyProps(),
  },
});
