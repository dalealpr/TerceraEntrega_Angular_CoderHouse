import { Injectable } from '@angular/core';
import { Jugador } from '../jugadores/interfaces/jugador';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  jugadores: Jugador[] = [
    {
      id: 1001,
      nombre: 'Lionel',
      apellido: 'Messi',
      edad: 36,
      nacionalidad: 'Argentino',
      equipo: 'Inter Miami CF',
      posicion: 'Delantero',
    },
    {
      id: 1002,
      nombre: 'Cristiano Ronaldo',
      apellido: 'dos Santos',
      edad: 38,
      nacionalidad: 'Portugues',
      equipo: 'Al-Nassr',
      posicion: 'Delantero',
    },
    {
      id: 1003,
      nombre: 'Kylian',
      apellido: 'Mbappé',
      edad: 24,
      nacionalidad: 'Frances',
      equipo: 'París Saint-Germain',
      posicion: 'Delantero',
    },
    {
      id: 1004,
      nombre: 'Erling',
      apellido: 'Haaland',
      edad: 21,
      nacionalidad: 'Noruego',
      equipo: 'Manchester City',
      posicion: 'Delantero',
    },
    {
      id: 1005,
      nombre: 'Neymar',
      apellido: 'Santos ',
      edad: 31,
      nacionalidad: 'Brasileño',
      equipo: 'Al-Hilal FC',
      posicion: 'Delantero',
    },
  ];

  // Mostrar jugadores
  getJugadores$(): Observable<Jugador[]> {
    return of(this.jugadores);
  }
  // Crear nuevo jugador
  createJugador$(payload: Jugador): Observable<Jugador[]> {
    this.jugadores.push(payload);
    return of([...this.jugadores]);
  }

  // Editar jugador
  editJugador$(id: number, payload: Jugador): Observable<Jugador[]> {
    this.jugadores = this.jugadores.map((jugador) =>
      jugador.id === id ? { ...jugador, ...payload } : jugador
    );
    return of(this.jugadores);
  }

  //Eliminar jugador
  deleteJugador$(id: number): Observable<Jugador[]> {
    this.jugadores = this.jugadores.filter((jugador) => jugador.id !== id);
    return of(this.jugadores);
  }

  // Encontrar jugador mediante Id
  getJugadorById$(id: number): Observable<Jugador | undefined> {
    return of(this.jugadores.find((jugador) => jugador.id === id));
  }
}
