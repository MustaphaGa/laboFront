import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTypeAnalyseComponent } from './page-type-analyse.component';

describe('PageTypeAnalyseComponent', () => {
  let component: PageTypeAnalyseComponent;
  let fixture: ComponentFixture<PageTypeAnalyseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageTypeAnalyseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageTypeAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
