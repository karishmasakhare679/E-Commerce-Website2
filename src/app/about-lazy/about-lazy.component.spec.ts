import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutLazyComponent } from './about-lazy.component';

describe('AboutLazyComponent', () => {
  let component: AboutLazyComponent;
  let fixture: ComponentFixture<AboutLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
