import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCartLazyComponent } from './my-cart-lazy.component';

describe('MyCartLazyComponent', () => {
  let component: MyCartLazyComponent;
  let fixture: ComponentFixture<MyCartLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCartLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCartLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
