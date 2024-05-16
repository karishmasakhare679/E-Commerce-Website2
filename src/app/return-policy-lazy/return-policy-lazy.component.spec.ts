import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPolicyLazyComponent } from './return-policy-lazy.component';

describe('ReturnPolicyLazyComponent', () => {
  let component: ReturnPolicyLazyComponent;
  let fixture: ComponentFixture<ReturnPolicyLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnPolicyLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPolicyLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
