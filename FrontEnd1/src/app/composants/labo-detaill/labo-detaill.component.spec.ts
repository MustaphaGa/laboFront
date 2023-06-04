import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboDetaillComponent } from './labo-detaill.component';

describe('LaboDetaillComponent', () => {
  let component: LaboDetaillComponent;
  let fixture: ComponentFixture<LaboDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaboDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
