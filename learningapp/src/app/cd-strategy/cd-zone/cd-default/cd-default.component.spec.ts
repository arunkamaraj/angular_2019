import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdDefaultComponent } from './cd-default.component';

describe('CdDefaultComponent', () => {
  let component: CdDefaultComponent;
  let fixture: ComponentFixture<CdDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
