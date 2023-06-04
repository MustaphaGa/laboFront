import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultatDetaillComponent } from './resultat-detaill.component';

describe('ResultatDetaillComponent', () => {
  let component: ResultatDetaillComponent;
  let fixture: ComponentFixture<ResultatDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultatDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultatDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
