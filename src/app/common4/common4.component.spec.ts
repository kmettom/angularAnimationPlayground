import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Common4Component } from './common4.component';

describe('Common4Component', () => {
  let component: Common4Component;
  let fixture: ComponentFixture<Common4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Common4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Common4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
