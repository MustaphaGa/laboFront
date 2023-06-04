import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologisteDetaillComponent } from './biologiste-detaill.component';

describe('BiologisteDetaillComponent', () => {
  let component: BiologisteDetaillComponent;
  let fixture: ComponentFixture<BiologisteDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologisteDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologisteDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
