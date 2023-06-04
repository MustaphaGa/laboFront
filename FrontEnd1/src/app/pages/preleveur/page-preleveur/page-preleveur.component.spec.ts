import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePreleveurComponent } from './page-preleveur.component';

describe('PagePreleveurComponent', () => {
  let component: PagePreleveurComponent;
  let fixture: ComponentFixture<PagePreleveurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePreleveurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePreleveurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
