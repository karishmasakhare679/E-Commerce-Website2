import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscriptionLazyComponent } from './discription-lazy.component';

describe('DiscriptionLazyComponent', () => {
  let component: DiscriptionLazyComponent;
  let fixture: ComponentFixture<DiscriptionLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscriptionLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscriptionLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
