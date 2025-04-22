import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressBox } from './address-box.component';

describe('AddressBox', () => {
  let component: AddressBox;
  let fixture: ComponentFixture<AddressBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddressBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
