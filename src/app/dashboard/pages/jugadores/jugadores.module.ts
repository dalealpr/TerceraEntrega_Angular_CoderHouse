import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadoresTableComponent } from './components/jugadores-table/jugadores-table.component';
import { JugadoresComponent } from './jugadores.component';
import { JugadoresDialogComponent } from './components/jugadores-dialog/jugadores-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JugadoresService } from '../services/jugadores.service';
import { JugadoresDetailComponent } from './components/jugadores-detail/jugadores-detail.component';
import { JugadoresRoutingModule } from './jugadores-routing.module';

@NgModule({
  declarations: [
    JugadoresTableComponent,
    JugadoresComponent,
    JugadoresDialogComponent,
    JugadoresDetailComponent,
  ],
  imports: [CommonModule, SharedModule, JugadoresRoutingModule],
  exports: [JugadoresComponent],
  providers: [JugadoresService],
})
export class JugadoresModule {}
