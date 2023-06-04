import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauPreleveurComponent } from './nouveau-preleveur.component';

describe('NouveauPreleveurComponent', () => {
  let component: NouveauPreleveurComponent;
  let fixture: ComponentFixture<NouveauPreleveurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauPreleveurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauPreleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
