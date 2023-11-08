import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './pipes/fullname.pipe';
import { HeadlineDirective } from './direcives/headline.directive';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { FormErrorPipe } from './pipes/form-error.pipe';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FullnamePipe, HeadlineDirective, FormErrorPipe],
  imports: [CommonModule],
  exports: [
    HeadlineDirective,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTableModule,
    FullnamePipe,
    FormErrorPipe,
    RouterModule,
    MatCardModule,
  ],
})
export class SharedModule {}
