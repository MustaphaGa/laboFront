import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporteFactureComponent } from './exporte-facture.component';

describe('ExporteFactureComponent', () => {
  let component: ExporteFactureComponent;
  let fixture: ComponentFixture<ExporteFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporteFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporteFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
