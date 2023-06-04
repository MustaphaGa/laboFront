import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmployeesComponent } from './page-employees.component';

describe('PageEmployeesComponent', () => {
  let component: PageEmployeesComponent;
  let fixture: ComponentFixture<PageEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
