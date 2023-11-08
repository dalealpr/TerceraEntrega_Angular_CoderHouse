import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EquiposService } from '../../../services/equipos.service';

@Component({
  selector: 'app-equipos-dialog',
  templateUrl: './equipos-dialog.component.html',
  styleUrls: ['./equipos-dialog.component.scss'],
})
export class EquiposDialogComponent {
  equipoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<EquiposDialogComponent>,
    private equipoService: EquiposService,

    // Recibo data usuario
    @Inject(MAT_DIALOG_DATA) private equipoId?: number
  ) {
    this.equipoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      division: ['', [Validators.required, Validators.minLength(3)]],
      liga: ['', [Validators.required, Validators.minLength(3)]],
      pais: ['', [Validators.required, Validators.minLength(3)]],
    });

    if (this.equipoId) {
      this.equipoService.getEquipoById$(this.equipoId).subscribe({
        next: (equipo) => {
          if (equipo) {
            this.equipoForm.patchValue(equipo);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.equipoId;
  }

  closeDialog() {
    this.matDialogRef.close();
  }

  onSubmit(): void {
    if (this.equipoForm.invalid) {
      this.equipoForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.equipoForm.value);
    }
  }
}
