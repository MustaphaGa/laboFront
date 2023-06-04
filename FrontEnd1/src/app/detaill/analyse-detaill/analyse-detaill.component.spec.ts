import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseDetaillComponent } from './analyse-detaill.component';

describe('AnalyseDetaillComponent', () => {
  let component: AnalyseDetaillComponent;
  let fixture: ComponentFixture<AnalyseDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
