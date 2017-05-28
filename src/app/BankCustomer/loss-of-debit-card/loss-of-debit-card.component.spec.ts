/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LossOfDebitCardComponent } from './loss-of-debit-card.component';

describe('LossOfDebitCardComponent', () => {
  let component: LossOfDebitCardComponent;
  let fixture: ComponentFixture<LossOfDebitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossOfDebitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossOfDebitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
