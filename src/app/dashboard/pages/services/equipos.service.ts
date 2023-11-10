import { Injectable } from '@angular/core';
import { Equipo } from '../equipos/interfaces/equipo';
import { Observable, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';

@Injectable({
  providedIn: 'root',
})
export class EquiposService {
  constructor(private httpClient: HttpClient) {}
  // Mostrar equipos
  getEquipos$(): Observable<Equipo[]> {
    return this.httpClient.get<Equipo[]>(`${environment.baseUrl}equipos`);
  }

  // Crear nuevo equipo
  createEquipo$(payload: Equipo): Observable<Equipo[]> {
    return this.httpClient
      .post<Equipo>(`${environment.baseUrl}equipos`, payload)
      .pipe(concatMap(() => this.getEquipos$()));
  }

  // Editar Equipo
  editEquipo$(equipoId: number, payload: Equipo): Observable<Equipo[]> {
    return this.httpClient
      .put<Equipo>(`${environment.baseUrl}equipos/${equipoId}`, payload)
      .pipe(concatMap(() => this.getEquipos$()));
  }

  //Eliminar equipo
  deleteEquipo$(equipoId: number): Observable<Equipo[]> {
    return this.httpClient
      .delete<Equipo>(`${environment.baseUrl}equipos/${equipoId}`)
      .pipe(concatMap(() => this.getEquipos$()));
  }

  // Encontrar equipo mediante Id
  getEquipoById$(id: number): Observable<Equipo | undefined> {
    return this.httpClient.get<Equipo>(`${environment.baseUrl}equipos/${id}`);
  }
}
