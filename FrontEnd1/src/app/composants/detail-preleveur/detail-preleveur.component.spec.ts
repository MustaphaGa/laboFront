import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPreleveurComponent } from './detail-preleveur.component';

describe('DetailPreleveurComponent', () => {
  let component: DetailPreleveurComponent;
  let fixture: ComponentFixture<DetailPreleveurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPreleveurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPreleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
