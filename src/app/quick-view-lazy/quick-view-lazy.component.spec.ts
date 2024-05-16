import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickViewLazyComponent } from './quick-view-lazy.component';

describe('QuickViewLazyComponent', () => {
  let component: QuickViewLazyComponent;
  let fixture: ComponentFixture<QuickViewLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuickViewLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickViewLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
