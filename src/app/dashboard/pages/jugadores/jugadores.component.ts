import { Component } from '@angular/core';
import { Jugador } from './interfaces/jugador';
import { MatDialog } from '@angular/material/dialog';
import { JugadoresService } from '../services/jugadores.service';
import { Observable } from 'rxjs';
import { JugadoresDialogComponent } from './components/jugadores-dialog/jugadores-dialog.component';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.scss'],
})
export class JugadoresComponent {
  n: number = 0;
  jugadores$: Observable<Jugador[]>;

  constructor(
    private matDialog: MatDialog,
    private jugadoresService: JugadoresService,
    private notifService: NotifierService
  ) {
    // Mostrar jugadores
    this.jugadores$ = this.jugadoresService.getJugadores$();
  }

  //METODO AGREGAR JUGADOR
  addJugador(): void {
    // Dialog
    this.matDialog
      .open(JugadoresDialogComponent, {
        height: '520px',
        width: '700px',
      })
      .afterClosed()
      // suscripción
      .subscribe({
        next: (result) => {
          if (result) {
            this.jugadores$ = this.jugadoresService.createJugador$({
              id: 5 + this.n,
              nombre: result.nombre,
              apellido: result.apellido,
              edad: result.edad,
              nacionalidad: result.nacionalidad,
              equipo: result.equipo,
              posicion: result.posicion,
            });
            this.n++;
          }
        },
      });
  }

  // METODO BORRAR JUGADOR
  onDeleteJugador(JugadorId: number): void {
    this.jugadores$ = this.jugadoresService.deleteJugador$(JugadorId);
    this.notifService.showSuccessNotif(
      'Jugador Borrado',
      `El Jugador ha sido Borrado de la tabla`
    );
  }

  // METODO EDITAR JUGADOR
  onEditJugador(JugadorId: number): void {
    // Dialog
    this.matDialog
      .open(JugadoresDialogComponent, {
        data: JugadorId,
        height: '520px',
        width: '700px',
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.jugadores$ = this.jugadoresService.editJugador$(
              JugadorId,
              result
            );
          }
        },
      });
  }
}
