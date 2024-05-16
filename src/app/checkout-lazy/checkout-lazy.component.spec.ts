import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutLazyComponent } from './checkout-lazy.component';

describe('CheckoutLazyComponent', () => {
  let component: CheckoutLazyComponent;
  let fixture: ComponentFixture<CheckoutLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
