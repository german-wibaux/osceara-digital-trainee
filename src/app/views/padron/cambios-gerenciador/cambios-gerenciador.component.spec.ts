import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiosGerenciadorComponent } from './cambios-gerenciador.component';

describe('CambiosGerenciadorComponent', () => {
  let component: CambiosGerenciadorComponent;
  let fixture: ComponentFixture<CambiosGerenciadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CambiosGerenciadorComponent]
    });
    fixture = TestBed.createComponent(CambiosGerenciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
