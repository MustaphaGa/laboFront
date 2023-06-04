import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeDetaillComponent } from './employe-detaill.component';

describe('EmployeDetaillComponent', () => {
  let component: EmployeDetaillComponent;
  let fixture: ComponentFixture<EmployeDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
