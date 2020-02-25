import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdOnpushComponent } from './cd-onpush.component';

describe('CdOnpushComponent', () => {
  let component: CdOnpushComponent;
  let fixture: ComponentFixture<CdOnpushComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdOnpushComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdOnpushComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
