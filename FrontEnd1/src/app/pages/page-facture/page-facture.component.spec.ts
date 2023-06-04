import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFactureComponent } from './page-facture.component';

describe('PageFactureComponent', () => {
  let component: PageFactureComponent;
  let fixture: ComponentFixture<PageFactureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageFactureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageFactureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
