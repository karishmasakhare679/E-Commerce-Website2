import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscriptionTestComponent } from './discription-test.component';

describe('DiscriptionTestComponent', () => {
  let component: DiscriptionTestComponent;
  let fixture: ComponentFixture<DiscriptionTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscriptionTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscriptionTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
