import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NonSingletonComponent } from './non-singleton.component';

describe('NonSingletonComponent', () => {
  let component: NonSingletonComponent;
  let fixture: ComponentFixture<NonSingletonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NonSingletonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NonSingletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
