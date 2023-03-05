import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Common1Component } from './common1.component';

describe('Common1Component', () => {
  let component: Common1Component;
  let fixture: ComponentFixture<Common1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Common1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Common1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
