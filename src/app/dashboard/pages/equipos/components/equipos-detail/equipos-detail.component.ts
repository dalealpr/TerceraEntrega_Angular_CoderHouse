import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jugadores-detail',
  templateUrl: './equipos-detail.component.html',
  styleUrls: ['./equipos-detail.component.scss'],
})
export class EquiposDetailComponent {
  constructor(private activatedRoute: ActivatedRoute) {
    console.log(this.activatedRoute.snapshot.params);
  }
}
