import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLazyComponent } from './footer-lazy.component';

describe('FooterLazyComponent', () => {
  let component: FooterLazyComponent;
  let fixture: ComponentFixture<FooterLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
