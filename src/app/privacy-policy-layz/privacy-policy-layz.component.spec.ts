import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyPolicyLayzComponent } from './privacy-policy-layz.component';

describe('PrivacyPolicyLayzComponent', () => {
  let component: PrivacyPolicyLayzComponent;
  let fixture: ComponentFixture<PrivacyPolicyLayzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivacyPolicyLayzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivacyPolicyLayzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
