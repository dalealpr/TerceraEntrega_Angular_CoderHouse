import { Component, Inject, OnInit } from '@angular/core';
import { User } from '../../interfaces/users';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-users-dialog',
  templateUrl: './users-dialog.component.html',
  styleUrls: ['./users-dialog.component.scss'],
})
export class UsersDialogComponent {
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<UsersDialogComponent>,
    private userService: UsersService,

    // Recibo data usuario
    @Inject(MAT_DIALOG_DATA) private usuarioId?: number
  ) {
    this.userForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required]],
    });

    if (this.usuarioId) {
      this.userService.getUserById$(this.usuarioId).subscribe({
        next: (user) => {
          if (user) {
            this.userForm.patchValue(user);
          }
        },
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.usuarioId;
  }

  closeDialog() {
    this.matDialogRef.close();
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close(this.userForm.value);
    }
  }
}
