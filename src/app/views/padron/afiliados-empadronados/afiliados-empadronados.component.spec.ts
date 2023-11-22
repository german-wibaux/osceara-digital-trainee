import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfiliadosEmpadronadosComponent } from './afiliados-empadronados.component';

describe('AfiliadosEmpadronadosComponent', () => {
  let component: AfiliadosEmpadronadosComponent;
  let fixture: ComponentFixture<AfiliadosEmpadronadosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfiliadosEmpadronadosComponent]
    });
    fixture = TestBed.createComponent(AfiliadosEmpadronadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
