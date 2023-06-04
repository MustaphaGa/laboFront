import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAccueilPrincipalComponent } from './page-accueil-principal.component';

describe('PageAccueilPrincipalComponent', () => {
  let component: PageAccueilPrincipalComponent;
  let fixture: ComponentFixture<PageAccueilPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageAccueilPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAccueilPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
