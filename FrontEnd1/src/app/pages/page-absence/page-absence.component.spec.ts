import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAbsenceComponent } from './page-absence.component';

describe('PageAbsenceComponent', () => {
  let component: PageAbsenceComponent;
  let fixture: ComponentFixture<PageAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
