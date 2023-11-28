import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EnrollmentEffects } from './store/enrollment.effects';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EnrollmentsTableComponent } from './components/enrollments-table/enrollments-table.component';
import { EnrollmentsComponent } from './enrollments.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { enrollmentFeature } from './store/enrollment.reducer';

@NgModule({
  declarations: [EnrollmentsComponent, EnrollmentsTableComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature(enrollmentFeature),
    EffectsModule.forFeature([EnrollmentEffects]),
  ],
})
export class EnrollmentsModule {}
