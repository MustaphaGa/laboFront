import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfResultatComponent } from './pdf-resultat.component';

describe('PdfResultatComponent', () => {
  let component: PdfResultatComponent;
  let fixture: ComponentFixture<PdfResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
