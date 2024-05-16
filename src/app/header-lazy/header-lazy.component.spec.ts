import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLazyComponent } from './header-lazy.component';

describe('HeaderLazyComponent', () => {
  let component: HeaderLazyComponent;
  let fixture: ComponentFixture<HeaderLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
