import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletonsProviderComponent } from './singletons-provider.component';

describe('SingletonsProviderComponent', () => {
  let component: SingletonsProviderComponent;
  let fixture: ComponentFixture<SingletonsProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingletonsProviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingletonsProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
