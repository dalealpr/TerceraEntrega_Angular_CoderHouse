import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Jugador } from '../../interfaces/jugador';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugadores-table',
  templateUrl: './jugadores-table.component.html',
  styleUrls: ['./jugadores-table.component.scss'],
})
export class JugadoresTableComponent {
  @Input()
  dataSource: Jugador[] = [];

  @Output()
  deleteJugador = new EventEmitter<number>();

  @Output()
  editJugador = new EventEmitter<number>();

  displayedColumns = [
    'Nombre y Apellido',
    'Edad',
    'Nacionalidad',
    'Equipo',
    'Posicion',
    'Actions',
  ];

  constructor(private router: Router) {}

  // Metodo Ruta Dinamica (detalle Jugador)
  goToDetail(userId: number): void {
    this.router.navigate(['dashboard', 'jugadores', 'detail', userId]);
  }
}
