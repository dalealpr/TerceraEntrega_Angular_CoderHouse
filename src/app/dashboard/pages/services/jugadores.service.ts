import { Injectable } from '@angular/core';
import { Jugador } from '../jugadores/interfaces/jugador';
import { Observable, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private httpClient: HttpClient) {}
  // Mostrar jugadores
  getJugadores$(): Observable<Jugador[]> {
    return this.httpClient.get<Jugador[]>(`${environment.baseUrl}players`);
  }
  // Crear nuevo jugador
  createJugador$(payload: Jugador): Observable<Jugador[]> {
    return this.httpClient
      .post<Jugador>(`${environment.baseUrl}players`, payload)
      .pipe(concatMap(() => this.getJugadores$()));
  }

  // Editar jugador
  editJugador$(JugadorId: number, payload: Jugador): Observable<Jugador[]> {
    return this.httpClient
      .put<Jugador>(`${environment.baseUrl}players/${JugadorId}`, payload)
      .pipe(concatMap(() => this.getJugadores$()));
  }

  //Eliminar jugador
  deleteJugador$(JugadorId: number): Observable<Jugador[]> {
    return this.httpClient
      .delete<Jugador>(`${environment.baseUrl}players/${JugadorId}`)
      .pipe(concatMap(() => this.getJugadores$()));
  }

  // Encontrar jugador mediante Id
  getJugadorById$(id: number): Observable<Jugador | undefined> {
    return this.httpClient.get<Jugador>(`${environment.baseUrl}players/${id}`);
  }
}
