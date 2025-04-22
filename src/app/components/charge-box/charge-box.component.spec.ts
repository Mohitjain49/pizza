import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeBox } from './charge-box.component';

describe('ChargeBox', () => {
  let component: ChargeBox;
  let fixture: ComponentFixture<ChargeBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChargeBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChargeBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
