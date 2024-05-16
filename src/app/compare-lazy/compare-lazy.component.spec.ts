import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareLazyComponent } from './compare-lazy.component';

describe('CompareLazyComponent', () => {
  let component: CompareLazyComponent;
  let fixture: ComponentFixture<CompareLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
