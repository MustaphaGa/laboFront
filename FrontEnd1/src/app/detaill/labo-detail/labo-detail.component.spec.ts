import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboDetailComponent } from './labo-detail.component';

describe('LaboDetailComponent', () => {
  let component: LaboDetailComponent;
  let fixture: ComponentFixture<LaboDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
