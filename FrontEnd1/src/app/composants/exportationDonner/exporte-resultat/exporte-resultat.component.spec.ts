import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporteResultatComponent } from './exporte-resultat.component';

describe('ExporteResultatComponent', () => {
  let component: ExporteResultatComponent;
  let fixture: ComponentFixture<ExporteResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporteResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporteResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
