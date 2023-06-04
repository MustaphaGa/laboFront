import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreleveurDetaillComponent } from './preleveur-detaill.component';

describe('PreleveurDetaillComponent', () => {
  let component: PreleveurDetaillComponent;
  let fixture: ComponentFixture<PreleveurDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreleveurDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreleveurDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
