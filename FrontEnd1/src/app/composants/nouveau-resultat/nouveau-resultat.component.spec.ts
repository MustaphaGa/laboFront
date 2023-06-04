import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauResultatComponent } from './nouveau-resultat.component';

describe('NouveauResultatComponent', () => {
  let component: NouveauResultatComponent;
  let fixture: ComponentFixture<NouveauResultatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauResultatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
