import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollment } from '../../interface/enrollment';
import { selectEnrollments } from '../../store/enrollment.selectors';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss'],
})
export class EnrollmentsTableComponent {
  displayedColums = ['id', 'jugador', 'equipo', 'actions'];

  enrollments$: Observable<Enrollment[]>;

  constructor(private store: Store) {
    this.enrollments$ = this.store.select(selectEnrollments);
  }
}
