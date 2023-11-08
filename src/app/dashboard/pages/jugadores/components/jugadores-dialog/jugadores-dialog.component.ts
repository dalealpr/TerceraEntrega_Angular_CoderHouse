import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { JugadoresService } from '../../../services/jugadores.service';

@Component({
  selector: 'app-jugadores-dialog',
  templateUrl: './jugadores-dialog.component.html',
  styleUrls: ['./jugadores-dialog.component.scss'],
})
export class JugadoresDialogComponent {
  jugadorForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<JugadoresDialogComponent>,
    private jugadorService: JugadoresService,

    // Recibo data usuario
    @Inject(MAT_DIALOG_DATA) private jugadorId?: number
  ) {
    this.jugadorForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required]],
      nacionalidad: ['', [Validators.required]],
      equipo: ['', [Validators.required]],
      posicion: ['', [Validators.required]],
    });

    if (this.jugadorId) {
      this.jugadorService.getJugadorById$(this.jugadorId).subscribe({
        next: (jugador) => {
          if (jugador) {
            this.jugadorForm.patchValue(jugador);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.jugadorId;
  }

  closeDialog() {
    this.matDialogRef.close();
  }

  onSubmit(): void {
    if (this.jugadorForm.invalid) {
      this.jugadorForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.jugadorForm.value);
    }
  }
}
