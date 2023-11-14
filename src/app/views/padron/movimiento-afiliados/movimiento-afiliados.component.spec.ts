import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimientoAfiliadosComponent } from './movimiento-afiliados.component';

describe('MovimientoAfiliadosComponent', () => {
  let component: MovimientoAfiliadosComponent;
  let fixture: ComponentFixture<MovimientoAfiliadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovimientoAfiliadosComponent]
    });
    fixture = TestBed.createComponent(MovimientoAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
