import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposDialogComponent } from './equipos-dialog.component';

describe('EquiposDialogComponent', () => {
  let component: EquiposDialogComponent;
  let fixture: ComponentFixture<EquiposDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquiposDialogComponent]
    });
    fixture = TestBed.createComponent(EquiposDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
