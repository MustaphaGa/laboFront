import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLaboComponent } from './page-labo.component';

describe('PageLaboComponent', () => {
  let component: PageLaboComponent;
  let fixture: ComponentFixture<PageLaboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLaboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLaboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
