import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaAfiliadosComponent } from './alta-afiliados.component';

describe('AltaAfiliadosComponent', () => {
  let component: AltaAfiliadosComponent;
  let fixture: ComponentFixture<AltaAfiliadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AltaAfiliadosComponent]
    });
    fixture = TestBed.createComponent(AltaAfiliadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
