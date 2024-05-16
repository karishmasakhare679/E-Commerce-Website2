import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLazyComponent } from './contact-lazy.component';

describe('ContactLazyComponent', () => {
  let component: ContactLazyComponent;
  let fixture: ComponentFixture<ContactLazyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactLazyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLazyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
