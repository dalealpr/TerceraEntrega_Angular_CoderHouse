import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formError',
})
export class FormErrorPipe implements PipeTransform {
  transform(
    value: ValidationErrors | null | undefined,
    ...args: unknown[]
  ): unknown {
    if (!value) {
      return '';
    }

    const erroMessages: string[] = [];
    if (value) {
      if ('required' in value) {
        erroMessages.push('Este campo es requerido');
      }
      if ('email' in value) {
        erroMessages.push('Ingrese un correo valido');
      }
      if ('pattern' in value) {
        erroMessages.push('No puede ingresar caracteres numéricos');
      }
    }
    return erroMessages.join('. ');
  }
}
