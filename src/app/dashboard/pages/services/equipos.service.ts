import { Injectable } from '@angular/core';
import { Equipo } from '../equipos/interfaces/equipo';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  equipos: Equipo[] = [
    {
      id: 1,
      nombre: 'Real Madrid',
      division: 'Primera Division',
      liga: 'LaLiga',
      pais: 'Espana',
    },
    {
      id: 2,
      nombre: 'Barcelona',
      division: 'Primera Division',
      liga: 'LaLiga',
      pais: 'Espana',
    },
    {
      id: 3,
      nombre: 'Liverpool',
      division: 'Primera Division',
      liga: 'Premier League',
      pais: 'Inglaterra',
    },
    {
      id: 4,
      nombre: 'Manchester City',
      division: 'Primera Division',
      liga: 'Premier League',
      pais: 'Inglaterra',
    },
  ];

  // Mostrar equipos
  getEquipos$(): Observable<Equipo[]> {
    return of(this.equipos);
  }

  // Crear nuevo equipo
  createEquipo$(payload: Equipo): Observable<Equipo[]> {
    this.equipos.push(payload);
    return of([...this.equipos]);
  }

  // Editar Equipo
  editEquipo$(id: number, payload: Equipo): Observable<Equipo[]> {
    this.equipos = this.equipos.map((c) =>
      c.id === id ? { ...c, ...payload } : c
    );
    return of(this.equipos);
  }

  //Eliminar equipo
  deleteEquipo$(id: number): Observable<Equipo[]> {
    this.equipos = this.equipos.filter((equipo) => equipo.id !== id);
    return of(this.equipos);
  }

  // Encontrar equipo mediante Id
  getEquipoById$(id: number): Observable<Equipo | undefined> {
    return of(this.equipos.find((equipo) => equipo.id === id));
  }
}
