import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBiologisteComponent } from './detail-biologiste.component';

describe('DetailBiologisteComponent', () => {
  let component: DetailBiologisteComponent;
  let fixture: ComponentFixture<DetailBiologisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailBiologisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBiologisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
