import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdExplicitComponent } from './cd-explicit.component';

describe('CdExplicitComponent', () => {
  let component: CdExplicitComponent;
  let fixture: ComponentFixture<CdExplicitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdExplicitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdExplicitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
