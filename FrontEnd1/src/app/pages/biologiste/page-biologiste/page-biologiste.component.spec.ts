import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBiologisteComponent } from './page-biologiste.component';

describe('PageBiologisteComponent', () => {
  let component: PageBiologisteComponent;
  let fixture: ComponentFixture<PageBiologisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageBiologisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageBiologisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
