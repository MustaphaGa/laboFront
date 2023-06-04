import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMouvementComponent } from './page-mouvement.component';

describe('PageMouvementComponent', () => {
  let component: PageMouvementComponent;
  let fixture: ComponentFixture<PageMouvementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMouvementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMouvementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
