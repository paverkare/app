import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstafeedComponent } from './instafeed.component';

describe('InstafeedComponent', () => {
  let component: InstafeedComponent;
  let fixture: ComponentFixture<InstafeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstafeedComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstafeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
