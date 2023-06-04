import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauLaboComponent } from './nouveau-labo.component';

describe('NouveauLaboComponent', () => {
  let component: NouveauLaboComponent;
  let fixture: ComponentFixture<NouveauLaboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauLaboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
