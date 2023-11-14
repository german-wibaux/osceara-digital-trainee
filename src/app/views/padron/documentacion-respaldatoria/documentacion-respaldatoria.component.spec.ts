import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentacionRespaldatoriaComponent } from './documentacion-respaldatoria.component';

describe('DocumentacionRespaldatoriaComponent', () => {
  let component: DocumentacionRespaldatoriaComponent;
  let fixture: ComponentFixture<DocumentacionRespaldatoriaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentacionRespaldatoriaComponent]
    });
    fixture = TestBed.createComponent(DocumentacionRespaldatoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
