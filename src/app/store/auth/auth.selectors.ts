import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, authFeatureKey } from './auth.reducer';
import { state } from '@angular/animations';

export const selectAuthState = createFeatureSelector<State>(authFeatureKey);

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.authUser
);
