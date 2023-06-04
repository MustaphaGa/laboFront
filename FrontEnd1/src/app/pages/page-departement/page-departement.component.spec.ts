import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDepartementComponent } from './page-departement.component';

describe('PageDepartementComponent', () => {
  let component: PageDepartementComponent;
  let fixture: ComponentFixture<PageDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
