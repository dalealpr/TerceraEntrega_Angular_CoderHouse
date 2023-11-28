import { Equipo } from '../../equipos/interfaces/equipo';
import { Jugador } from '../../jugadores/interfaces/jugador';
import { User } from '../../users/interfaces/users';

export interface Enrollment {
  id: number;
  playerId: number;
  equipoId: number;
  userId: number;
  user?: User;
  equipo?: Equipo;
  jugador?: Jugador;
}
