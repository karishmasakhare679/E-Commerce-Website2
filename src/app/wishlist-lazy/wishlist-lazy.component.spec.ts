import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishlistLazyComponent } from './wishlist-lazy.component';

describe('WishlistLazyComponent', () => {
  let component: WishlistLazyComponent;
  let fixture: ComponentFixture<WishlistLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishlistLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishlistLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
