import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputModalPage } from './input-modal.page';

describe('InputModalPage', () => {
  let component: InputModalPage;
  let fixture: ComponentFixture<InputModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
