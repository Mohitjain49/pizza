import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderScreen } from './order-screen.component';

describe('OrderScreen', () => {
  let component: OrderScreen;
  let fixture: ComponentFixture<OrderScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrderScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderScreen);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
