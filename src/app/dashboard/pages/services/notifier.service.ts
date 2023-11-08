import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { Notificaion } from 'src/app/shared/interfaces/notification';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  // Observable tipo Subject
  private notifier$ = new Subject<Notificaion>();

  constructor() {
    // Subscripcion al observable
    this.notifier$.subscribe({
      next: (myNotification) => {
        Swal.fire(
          myNotification.title,
          myNotification.message,
          myNotification.type
        );
      },
    });
  }

  //  Metodo MostrarNotificacion
  showSuccessNotif(title: string, message: string): void {
    this.notifier$.next({
      type: 'success',
      message,
      title,
    });
  }
  //  Metodo MostrarNotificacion
  showErrorNotif(title: string, message: string): void {
    this.notifier$.next({
      type: 'error',
      message,
      title,
    });
  }
}
