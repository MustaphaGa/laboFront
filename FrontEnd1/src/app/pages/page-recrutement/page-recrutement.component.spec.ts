import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRecrutementComponent } from './page-recrutement.component';

describe('PageRecrutementComponent', () => {
  let component: PageRecrutementComponent;
  let fixture: ComponentFixture<PageRecrutementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRecrutementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRecrutementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
