import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAnalyseComponent } from './detail-analyse.component';

describe('DetailAnalyseComponent', () => {
  let component: DetailAnalyseComponent;
  let fixture: ComponentFixture<DetailAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
