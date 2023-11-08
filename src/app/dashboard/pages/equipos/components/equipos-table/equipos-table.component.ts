import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Equipo } from '../../interfaces/equipo';

@Component({
  selector: 'app-equipos-table',
  templateUrl: './equipos-table.component.html',
  styleUrls: ['./equipos-table.component.scss'],
})
export class EquiposTableComponent {
  @Input()
  dataSource: Equipo[] = [];

  @Output()
  deleteEquipo = new EventEmitter<number>();

  @Output()
  editEquipo = new EventEmitter<number>();

  displayedColumns = ['Id', 'Nombre', 'División', 'Liga', 'País', 'Actions'];

  constructor(private router: Router) {}

  // Metodo Ruta Dinamica (detalle Equipo)
  goToDetail(equipoId: number): void {
    this.router.navigate(['dashboard', 'equipos', 'detail', equipoId]);
  }
}
