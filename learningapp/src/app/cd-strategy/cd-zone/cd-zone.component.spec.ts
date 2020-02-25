import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdZoneComponent } from './cd-zone.component';

describe('CdZoneComponent', () => {
  let component: CdZoneComponent;
  let fixture: ComponentFixture<CdZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
