import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLazyComponent } from './product-lazy.component';

describe('ProductLazyComponent', () => {
  let component: ProductLazyComponent;
  let fixture: ComponentFixture<ProductLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
