import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureDetaillComponent } from './facture-detaill.component';

describe('FactureDetaillComponent', () => {
  let component: FactureDetaillComponent;
  let fixture: ComponentFixture<FactureDetaillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureDetaillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureDetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
