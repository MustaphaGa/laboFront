import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExporteAnalyseComponent } from './exporte-analyse.component';

describe('ExporteAnalyseComponent', () => {
  let component: ExporteAnalyseComponent;
  let fixture: ComponentFixture<ExporteAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExporteAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExporteAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
