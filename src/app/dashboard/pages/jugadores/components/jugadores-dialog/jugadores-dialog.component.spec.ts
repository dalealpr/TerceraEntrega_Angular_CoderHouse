import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadoresDialogComponent } from './jugadores-dialog.component';

describe('JugadoresDialogComponent', () => {
  let component: JugadoresDialogComponent;
  let fixture: ComponentFixture<JugadoresDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JugadoresDialogComponent]
    });
    fixture = TestBed.createComponent(JugadoresDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
