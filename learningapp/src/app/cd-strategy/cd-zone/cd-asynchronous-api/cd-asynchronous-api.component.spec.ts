import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdAsynchronousApiComponent } from './cd-asynchronous-api.component';

describe('CdAsynchronousApiComponent', () => {
  let component: CdAsynchronousApiComponent;
  let fixture: ComponentFixture<CdAsynchronousApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdAsynchronousApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdAsynchronousApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
