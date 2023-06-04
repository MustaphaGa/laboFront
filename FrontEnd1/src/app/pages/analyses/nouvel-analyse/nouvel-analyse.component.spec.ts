import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelAnalyseComponent } from './nouvel-analyse.component';

describe('NouvelAnalyseComponent', () => {
  let component: NouvelAnalyseComponent;
  let fixture: ComponentFixture<NouvelAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouvelAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouvelAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
