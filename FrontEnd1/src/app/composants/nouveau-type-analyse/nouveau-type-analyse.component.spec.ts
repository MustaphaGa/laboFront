import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauTypeAnalyseComponent } from './nouveau-type-analyse.component';

describe('NouveauTypeAnalyseComponent', () => {
  let component: NouveauTypeAnalyseComponent;
  let fixture: ComponentFixture<NouveauTypeAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauTypeAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauTypeAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
