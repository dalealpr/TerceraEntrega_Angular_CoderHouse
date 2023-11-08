import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugadores-detail',
  templateUrl: './jugadores-detail.component.html',
  styleUrls: ['./jugadores-detail.component.scss'],
})
export class JugadoresDetailComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params);
  }
}
