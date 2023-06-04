import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauBiologisteComponent } from './nouveau-biologiste.component';

describe('NouveauBiologisteComponent', () => {
  let component: NouveauBiologisteComponent;
  let fixture: ComponentFixture<NouveauBiologisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauBiologisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauBiologisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
