import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from 'src/app/dashboard/pages/jugadores/interfaces/jugador';

@Pipe({
  name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
  transform(value: Jugador, ...args: unknown[]): unknown {
    const firstArg = args[0];
    const result = `${value.nombre} ${value.apellido}`;

    return result;
  }
}
