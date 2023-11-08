import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresTableComponent } from './jugadores-table.component';

describe('JugadoresTableComponent', () => {
  let component: JugadoresTableComponent;
  let fixture: ComponentFixture<JugadoresTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadoresTableComponent]
    });
    fixture = TestBed.createComponent(JugadoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
