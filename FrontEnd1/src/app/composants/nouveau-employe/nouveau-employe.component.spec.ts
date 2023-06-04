import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauEmployeComponent } from './nouveau-employe.component';

describe('NouveauEmployeComponent', () => {
  let component: NouveauEmployeComponent;
  let fixture: ComponentFixture<NouveauEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
