import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesLazyComponent } from './categories-lazy.component';

describe('CategoriesLazyComponent', () => {
  let component: CategoriesLazyComponent;
  let fixture: ComponentFixture<CategoriesLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
