import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RagisterLazyComponent } from './ragister-lazy.component';

describe('RagisterLazyComponent', () => {
  let component: RagisterLazyComponent;
  let fixture: ComponentFixture<RagisterLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RagisterLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RagisterLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
