import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Common3Component } from './common3.component';

describe('Common3Component', () => {
  let component: Common3Component;
  let fixture: ComponentFixture<Common3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Common3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Common3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
