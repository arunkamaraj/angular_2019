import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPropertyComponent } from './comp-property.component';

describe('CompPropertyComponent', () => {
  let component: CompPropertyComponent;
  let fixture: ComponentFixture<CompPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
