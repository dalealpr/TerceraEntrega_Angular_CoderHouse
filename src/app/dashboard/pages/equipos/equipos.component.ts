import { Component } from '@angular/core';
import { Equipo } from './interfaces/equipo';
import { EquiposService } from '../services/equipos.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { EquiposDialogComponent } from './components/equipos-dialog/equipos-dialog.component';
import { NotifierService } from '../services/notifier.service';

@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.scss'],
})
export class EquiposComponent {
  n: number = 0;
  equipos$: Observable<Equipo[]>;

  constructor(
    private equiposService: EquiposService,
    private matDialog: MatDialog,
    private notifService: NotifierService
  ) {
    // Mostrar equipos
    this.equipos$ = this.equiposService.getEquipos$();
  }

  //METODO AGREGAR EQUIPO
  addEquipo(): void {
    // Dialog
    this.matDialog
      .open(EquiposDialogComponent, {
        height: '420px',
        width: '700px',
      })
      .afterClosed()
      // suscripción
      .subscribe({
        next: (result) => {
          if (result) {
            this.equipos$ = this.equiposService.createEquipo$({
              id: 5 + this.n,
              nombre: result.nombre,
              division: result.division,
              liga: result.liga,
              pais: result.pais,
            });
            this.n++;
          }
        },
      });
  }

  // METODO BORRAR EQUIPO
  onDeleteEquipo(equipoId: number): void {
    this.equipos$ = this.equiposService.deleteEquipo$(equipoId);
    this.notifService.showSuccessNotif(
      'Equipo Borrado',
      `El equipo ha sido Borrado de la tabla`
    );
  }

  // METODO EDITAR EQUIPO
  onEditEquipo(equipoId: number): void {
    // Dialog
    this.matDialog
      .open(EquiposDialogComponent, {
        data: equipoId,
        height: '420px',
        width: '700px',
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (!!result) {
            this.equipos$ = this.equiposService.editEquipo$(equipoId, result);
          }
        },
      });
  }
}
